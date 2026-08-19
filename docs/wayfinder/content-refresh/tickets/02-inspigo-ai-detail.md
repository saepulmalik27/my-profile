---
id: '02'
title: 'Inspigo AI: capture project detail, challenges, and problems solved'
type: grilling
status: open
assignee: null
blocked_by: []
---

## Question

Deepen the existing `content/projects/inspigo-ai.mdx` case study (currently: streaming RAG chatbot over OpenAI/Bedrock, grounded in platform content) into content with real specificity:

- What does the RAG pipeline actually look like end to end — what's the retrieval source (vector DB? which one?), chunking/embedding approach, and how is retrieved content injected into the prompt? (The current MDX is architecture-vague on purpose; this ticket is where the real detail goes.)
- Walk through 1–2 concrete hard problems: e.g. managing streaming UX and perceived latency (mentioned in the existing MDX) — what specifically was tricky there? Handling hallucination/grounding failures? Cost/latency tradeoffs between OpenAI and Bedrock — why both, when is each used?
- What was your specific ownership boundary — frontend/streaming UX only, or also pipeline/backend work?
- Any numbers: response latency figures, accuracy/satisfaction signal, usage volume, timeline, team size?
- Is there anything screenshot-able or demo-able (even a short clip of the streaming chat in action), or is it fully NDA'd?
