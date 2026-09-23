Verdict: PASS
Artifact: .omo/evidence/weather-pwa-design/kma-contract-review.md
Principal-Artifact-SHA256: 6bc112765f23e2abe827b57db5346ba27ceedc6d78b98749b7b14e45f70a51ae
Command: todo-1-source-contract-and-receipt-qa
Exit-Status: 0
Sources: https://www.data.go.kr/data/15084084/openapi.do | 2026-09-23;https://www.data.go.kr/catalog/15084084/openapi.json | 2026-09-23;https://www.data.go.kr/data/15000415/openapi.do | 2026-09-23;https://apihub.kma.go.kr/notice.do?seqNotice=21 | 2026-09-23;https://apihub.kma.go.kr/notice.do?seqNotice=39 | 2026-09-23;https://apihub.kma.go.kr/apiList.do?apiMov=4.+%EB%8F%99%EB%84%A4%EC%98%88%EB%B3%B4%28%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%8B%A4%ED%99%A9%C2%B7%EC%B4%88%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%C2%B7%EB%8B%A8%EA%B8%B0%EC%98%88%EB%B3%B4%29+%EC%A1%B0%ED%9A%8C&seqApi=10&seqApiSub=286 | 2026-09-23
Plan-Review-SHA256: 21c2433b67329f585374e922f6d4659e75fef58c8c593d953486d88d9ae467d3
Plan-Contract-SHA256: e49440061e858ff0a3039673cb67e9724f48cbf9244b841a02a69d2ae220b485
Adversarial-Classes: source_version_drift=PROBED:official-kma-dates-verified;source_inference_confusion=PROBED:inference-labels-distinct;credential_leakage=PROBED:zero-secrets-scan-clean;boundary_contradiction=PROBED:zero-contradictions-found;privacy_overcollection=PROBED:raw-coordinates-excluded;false_runtime_claim=PROBED:future-verification-stipulated;numeric_budget_drift=PROBED:budgets-consistent-across-docs;unexpected_product_file=PROBED:no-source-files-created;accessibility_state_omission=PROBED:wcag-semantics-explicit;stale_missing_evidence=PROBED:all-evidence-artifacts-present
Temporary-Paths: none
Long-Lived-Processes: none
Cleanup-Status: PASS
