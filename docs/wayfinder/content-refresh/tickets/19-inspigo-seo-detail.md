---
id: '19'
title: 'Inspigo — SEO optimization (Google Search Console + tools): capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

- What specific SEO work was done — technical SEO (meta tags, sitemap, structured data, Core Web Vitals), content SEO, or both? Which "other tools" besides Search Console (Lighthouse, Ahrefs, SEMrush, something else)?
- One concrete hard problem: e.g. SSR/SSG strategy for SEO on a Next.js app, Core Web Vitals optimization work, structured data for course/content pages, SEO across a multi-tenant domain structure (per-client subdomains/custom domains).
- Ownership, and was this reactive (fixing a known SEO problem) or proactive (built the SEO foundation from scratch)?
- Numbers: search ranking or organic traffic improvement, Core Web Vitals scores before/after, indexed-page growth?
- Evidence: Search Console traffic graphs are often shareable anonymized — is that presentable here, or off-limits?

## Answer

**Scope:** Technical SEO, monitored/audited with Lighthouse and SEMrush alongside Google Search Console.

**Hard problem:** Technical SEO alone wasn't enough to move rankings — had to also work on metadata and keyword strategy to actually improve ranking, not just pass technical audits.

**Ownership:** Proactive — built the SEO foundation from scratch (no prior SEO work existed).

**Impact:** Core Web Vitals scores are green. Domestically, "Inspigo" as a branded/specific search term ranks #1; individual product pages are mixed — some land in the top 10, others don't yet.

**Evidence:** `apps/portfolio/public/project/SEO/` — `light-house.png`, `search-console.png`, `semrush.png`.
