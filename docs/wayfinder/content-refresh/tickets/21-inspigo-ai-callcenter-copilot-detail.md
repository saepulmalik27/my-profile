---
id: '21'
title: 'Inspigo — AI call-center agent copilot: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Split out of [ticket 11](11-inspigo-n8n-automation-detail.md) — a distinct POC project, not part of the n8n pentest automation workflow.

**Already captured:** Purpose is to help call-center agents during live client calls by surfacing a checklist of what they should ask, plus real-time transcription. Transcript + checklist results then feed an evaluation generator with a predefined scoring rubric/metrics, so each session gets an automatic score without first going through manual QA review. Still testing-scale usage (new POC, not yet production-wide). Screenshot at `apps/portfolio/public/project/automation/copilot.png`.

**Still open:**

- Tech stack specifics: what does real-time transcription (which service/model — e.g. Whisper, a cloud STT API, something else)? What model/approach generates the checklist and drives the evaluation/scoring against the rubric?
- One concrete hard problem: e.g. transcription accuracy/latency in real-time, checklist relevance across different call types, getting the evaluation rubric to produce consistent/trustworthy scores without human QA in the loop.
- Ownership: sole builder, or part of a team? Whose idea was it?
- Any firmer numbers beyond "testing scale" — how many agents/calls in the pilot, any measurable effect (QA time saved, agent performance signal)?

## Answer

**Stack:** Transcription runs on OpenAI's transcription model, now migrated to **OpenAI's live/real-time transcription model**. Per-case knowledge (what to check/ask for a given call type) is stored in a data table and pulled in by the AI according to the case at hand — checklist generation and evaluation both driven from that per-case knowledge base rather than one generic prompt.

**Hard problems:**

1. **Scoring margin of error above 5** — some rubric/metric dimensions are inherently human-subjective, so the AI's score doesn't always land where a human QA reviewer would.
2. **Transcription accuracy** — particularly distinguishing the agent's voice from the customer's, plus background noise degrading transcript quality.

**Ownership:** Idea originated with the product team; built jointly with 2 people from the product team.

**Numbers:** Applies to all ~11 agents. Previously QA sampled recordings manually — e.g. reviewing ~10 out of every 100 agent–customer sessions. This system evaluates **100% of sessions automatically** instead of a ~10% manual sample.

**Evidence:** Screenshot at `apps/portfolio/public/project/automation/copilot.png`.
