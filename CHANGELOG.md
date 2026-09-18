# CHANGELOG

> Change management per Phase 2 §50–51. Every change records: Date / URL / Change / Reason / Old / New / SEO risk / Rollback.

| Date | URL | Change | Reason | Old | New | SEO risk | Rollback |
|---|---|---|---|---|---|---|---|
| 2026-09-17 | — | Initialized CHANGELOG (no site changes this batch) | Phase 2 Week 1, §50 | — | — | — | — |
| 2026-09-18 | manufacturer.worldbatteryhub.com/manufacturers/* (all 50 entity pages) + directory index | Added `verification_level` field to every manufacturer in manufacturers.json (all `claimed` — no certificate-backed or independently-verified certification on file) and rendered the three-level state on the entity template + directory column | P1 §3 Manufacturer three-level verification (audit #16 §10 verification graph) | Entity pages showed only `verification.company`/`verification.certifications` free text; directory had no verification column | Added `verification_level` (claimed/certificate-backed/independently-verified) to data + a "Verification level" line on entity pages + a "Verification" directory column | Low — additive field + rendering; no URL/title/H1/canonical change | `git revert` this commit |
