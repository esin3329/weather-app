/**
 * Minimal Provider-Neutral API Proxy & Static File Server
 * Zero external dependencies (uses native node:http, node:fs, node:path).
 */

import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { CoalescingCache } from './cache.js';
import { RateLimiter, validateCoordinates, handleCors, scrubLog } from './rate-limiter.js';
import { normalizeWeatherEnvelope } from './normalizer.js';
import { fetchNowcast, fetchVillageForecast, fetchWeatherWarnings } from './kma-client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const CLIENT_DIR = join(ROOT_DIR, 'client');
const DATA_DIR = join(ROOT_DIR, 'data');

const PORT = parseInt(process.env.PORT || '8080', 10);
const HOST = process.env.HOST || '0.0.0.0';

const cache = new CoalescingCache({ maxEntries: 500, defaultTtlMs: 15 * 60 * 1000 });
const warningsCache = new CoalescingCache({ maxEntries: 100, defaultTtlMs: 5 * 60 * 1000 });
const rateLimiter = new RateLimiter({ capacity: 30, refillRatePerSec: 0.5 });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

/**
 * Sends a JSON response with status code.
 */
function sendJson(res, statusCode, data, headers = {}) {
  const jsonStr = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(jsonStr),
    'Cache-Control': 'no-store',
    ...headers
  });
  res.end(jsonStr);
}

/**
 * Handles /v1/forecast request.
 */
async function handleForecast(req, res, url) {
  const nxRaw = url.searchParams.get('nx');
  const nyRaw = url.searchParams.get('ny');
  const regionLabel = url.searchParams.get('region') || '';

  const validation = validateCoordinates(nxRaw, nyRaw);
  if (!validation.valid) {
    return sendJson(res, 400, { error: validation.error });
  }

  const { nx, ny } = validation;
  const cacheKey = CoalescingCache.makeKey('forecast', nx, ny);

  try {
    const envelope = await cache.getOrFetch(cacheKey, async () => {
      let warningFailed = false;
      let warningsRaw = null;

      // 1. Fetch warnings with independent degradation
      try {
        warningsRaw = await warningsCache.getOrFetch('warnings:global', async () => {
          return await fetchWeatherWarnings();
        }, 5 * 60 * 1000);
      } catch (err) {
        console.warn(`[Proxy] Upstream warnings degraded: ${scrubLog(err.message)}`);
        warningFailed = true;
      }

      // 2. Fetch nowcast & village forecast concurrently
      const [ncstRaw, vilageRaw] = await Promise.all([
        fetchNowcast(nx, ny),
        fetchVillageForecast(nx, ny)
      ]);

      return normalizeWeatherEnvelope({
        nx,
        ny,
        regionLabel,
        ncstRaw,
        vilageRaw,
        warningsRaw,
        warningFailed
      });
    }, 15 * 60 * 1000);

    return sendJson(res, 200, envelope, {
      'Cache-Control': 'public, max-age=300'
    });
  } catch (err) {
    console.error(`[Proxy] Forecast fetch failed: ${scrubLog(err.message)}`);
    return sendJson(res, 502, {
      error: 'Upstream KMA service error',
      message: scrubLog(err.message)
    });
  }
}

/**
 * Handles /v1/warnings request.
 */
async function handleWarnings(req, res) {
  try {
    const warnings = await warningsCache.getOrFetch('warnings:global', async () => {
      return await fetchWeatherWarnings();
    }, 5 * 60 * 1000);

    return sendJson(res, 200, warnings, {
      'Cache-Control': 'public, max-age=180'
    });
  } catch (err) {
    console.error(`[Proxy] Warnings fetch failed: ${scrubLog(err.message)}`);
    return sendJson(res, 502, {
      error: 'Upstream KMA warnings unavailable',
      message: scrubLog(err.message)
    });
  }
}

/**
 * Serves static client files.
 */
function handleStatic(req, res, pathname) {
  let relativePath = pathname === '/' ? '/index.html' : pathname;

  // Check data/ directory for kma-regions.json
  let filePath;
  if (relativePath.startsWith('/data/')) {
    filePath = join(DATA_DIR, relativePath.replace('/data/', ''));
  } else {
    filePath = join(CLIENT_DIR, relativePath);
  }

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    const ext = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = readFileSync(filePath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': content.length,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });
    res.end(content);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

/**
 * Request listener.
 */
export function createServer() {
  return http.createServer(async (req, res) => {
    // 1. CORS Preflight & Headers
    if (handleCors(req, res)) return;

    // 2. Client IP Rate Limiting
    const clientIp = req.socket.remoteAddress || '127.0.0.1';
    const rateCheck = rateLimiter.consume(clientIp);
    res.setHeader('X-RateLimit-Limit', '30');
    res.setHeader('X-RateLimit-Remaining', String(rateCheck.remaining));

    if (!rateCheck.allowed) {
      res.setHeader('Retry-After', String(Math.ceil(rateCheck.resetMs / 1000)));
      return sendJson(res, 429, { error: 'Too many requests. Please wait before retrying.' });
    }

    const host = req.headers.host || `localhost:${PORT}`;
    const url = new URL(req.url, `http://${host}`);
    const pathname = url.pathname;

    // 3. Routing
    if (pathname === '/health') {
      return sendJson(res, 200, { status: 'ok', timestamp: new Date().toISOString() });
    }

    if (pathname === '/v1/forecast') {
      return await handleForecast(req, res, url);
    }

    if (pathname === '/v1/warnings') {
      return await handleWarnings(req, res);
    }

    // 4. Fallback to static asset serving
    if (req.method === 'GET' || req.method === 'HEAD') {
      return handleStatic(req, res, pathname);
    }

    res.statusCode = 405;
    res.end('Method Not Allowed');
  });
}

// Start server if directly executed
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createServer();
  server.listen(PORT, HOST, () => {
    console.log(`[Proxy] Server running at http://${HOST}:${PORT}`);
  });
}
