---
id: '04'
title: Decide the abuse-guardrail approach for the public convert endpoint
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: ['01']
---

## Question

`apps/doc-converter` is publicly reachable, and document conversion (especially PDF, per whatever ticket 01 recommends) can be resource-heavy. Decide what guardrails are proportionate:

- Rate limiting: mechanism (e.g. Upstash Redis / Vercel KV-backed, IP-based) and limits (requests per minute/hour).
- File-size or content-length caps on the generic upload/paste path, sized to ticket 01's engine constraints.
- Whether a lightweight human check (e.g. Cloudflare/Vercel Turnstile) is warranted, or rate limiting alone is enough for a low-traffic personal site.
- Does the portfolio-content export path need lighter (or no) guardrails than the generic path, since it operates on fixed, known-size content rather than arbitrary uploads?
- Any minimal logging/monitoring needed to notice abuse happening at all.

## Answer

**Rate limiting: none at launch.** No Upstash/Redis, no Vercel Firewall rules — deliberately deferred given the site's actual low-traffic profile. The size cap below and Vercel's own platform-level protections are the guardrail for now; add rate limiting later only if real traffic shows a need.

**Size cap: ~4MB** on the generic upload/paste path — close to Vercel's 4.5MB hard request-body ceiling (per ticket 01), maximizing usable input size over extra safety margin.

**Human check: none.** No Turnstile/CAPTCHA — judged disproportionate friction for a personal site's real risk level, consistent with skipping rate limiting.

**Portfolio-content export path: lighter, no extra limits.** No size cap or human check applied there, since its input is fixed and bounded (a specific case study or the generated Resume/CV) rather than arbitrary user-supplied content — the generic path's guardrails don't apply.

**Monitoring: basic conversion logging, added in-app.** Each conversion request logs timestamp, IP, requested format, and rough input size — not relying solely on Vercel's default request logs — giving a queryable record if usage patterns ever need checking, since there's no automated rate-limit enforcement to fall back on.
