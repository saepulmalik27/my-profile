---
id: '14'
title: 'Inspigo — AWS S3 media upload, Amplify, and Vercel deployment: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

This one bundles three related infra pieces — capture each, and decide if they're really one story or should split:

- **S3 media upload:** what's the upload flow (direct browser-to-S3 via presigned URLs, or proxied through a backend)? What media types, and any processing (resize, transcode, thumbnailing)?
- **Amplify:** what specifically was it set up for — hosting, auth, something else? Still in use, or superseded by something?
- **Vercel:** which project(s) deploy through it — preview deploys per PR, env var management, custom domains for enterprise clients?
- One concrete hard problem across these: e.g. large-file upload UX, presigned URL security/expiry, CORS configuration, secrets/env parity across Amplify and Vercel, multi-tenant custom domain setup.
- Was this your initiative (no infra existed for this before) or maintaining/extending an existing setup?
- Numbers: file sizes/volumes handled, deploy time improvement, incidents avoided by the setup?
- Evidence: unlikely for infra config specifically — confirm, or note if there's anything presentable (e.g. a deploy dashboard).

## Answer

**S3 media upload:** Two paths — direct browser-to-S3 upload via presigned URLs, and a backend-proxied path that runs images through a **Lambda-based image converter/optimizer** before storage.

**Amplify:** Used for hosting and deployment.

**Vercel:** All projects were originally on Vercel, then migrated to Amplify.

**Hard problem:** Amplify's deploy process is slow — 6–10 minutes per deploy — and cache management there is still manual, unlike Vercel's more automatic caching.

**Ownership:** Collective initiative between the engineering manager and the team (not solo-driven).

**Impact:** Better media organization vs. storing media directly in the database — cleaner separation that also makes image optimization easier to apply.

**Evidence:** `apps/portfolio/public/project/aws/s3-aws.png` and `apps/portfolio/public/project/aws/amplify-deploy-dashboard.png`.
