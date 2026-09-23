#!/usr/bin/env bash
set -euo pipefail

# Secret Scanning Script for Client-Side Artifacts
# Ensures zero credentials or upstream ServiceKeys exist in client bundles.

TARGET_DIR="${1:-client}"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Error: Directory '$TARGET_DIR' does not exist." >&2
  exit 1
fi

echo "==> Scanning for secrets in '$TARGET_DIR'..."

# Patterns to detect:
# 1. KMA_SERVICE_KEY or raw service keys
# 2. Hardcoded API keys or authorization tokens
# 3. Suspicious base64/hex token patterns
SECRET_PATTERNS=(
  "KMA_SERVICE_KEY"
  "serviceKey=[^& \n\r]{10,}"
  "apikey=['\"][a-zA-Z0-9_-]{16,}['\"]"
  "api_key=['\"][a-zA-Z0-9_-]{16,}['\"]"
  "bearer [a-zA-Z0-9_\-\.]{20,}"
)

FOUND_SECRETS=0

for pattern in "${SECRET_PATTERNS[@]}"; do
  MATCHES=$(grep -E -rn -i "$pattern" "$TARGET_DIR" || true)
  if [[ -n "$MATCHES" ]]; then
    echo "[ALERT] Potential secret pattern found: $pattern" >&2
    echo "$MATCHES" >&2
    FOUND_SECRETS=$((FOUND_SECRETS + 1))
  fi
done

if [[ $FOUND_SECRETS -gt 0 ]]; then
  echo "==> Secret scan FAILED: $FOUND_SECRETS violation(s) detected!" >&2
  exit 1
fi

echo "==> Secret scan PASSED: Zero credentials found in '$TARGET_DIR'."
exit 0
