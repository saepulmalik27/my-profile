---
id: '02'
title: 'Inspigo AI: capture project detail, challenges, and problems solved'
type: grilling
status: closed
assignee: saepulalmalik@gmail.com
blocked_by: []
---

## Question

Deepen the existing `content/projects/inspigo-ai.mdx` case study (currently: streaming RAG chatbot over OpenAI/Bedrock, grounded in platform content) into content with real specificity:

- What does the RAG pipeline actually look like end to end — what's the retrieval source (vector DB? which one?), chunking/embedding approach, and how is retrieved content injected into the prompt? (The current MDX is architecture-vague on purpose; this ticket is where the real detail goes.)
- Walk through 1–2 concrete hard problems: e.g. managing streaming UX and perceived latency (mentioned in the existing MDX) — what specifically was tricky there? Handling hallucination/grounding failures? Cost/latency tradeoffs between OpenAI and Bedrock — why both, when is each used?
- What was your specific ownership boundary — frontend/streaming UX only, or also pipeline/backend work?
- Any numbers: response latency figures, accuracy/satisfaction signal, usage volume, timeline, team size?
- Is there anything screenshot-able or demo-able (even a short clip of the streaming chat in action), or is it fully NDA'd?

## Answer

**RAG pipeline end to end:** Documents are uploaded via the Inspigo CMS (see ticket 15), stored in S3 (media), and the content is ingested into **Pinecone** as the vector store. Pinecone handles chunking and metadata; embeddings use **OpenAI's embedding models**. Retrieved chunks are injected into the prompt at generation time.

**Hard problem:** Primary model is **OpenAI** with **Bedrock as fallback**. Streaming UX originally shipped over **WebSocket** (still used for some legacy roleplay features) and newer flows use **SSE**. The main hard problem was **concurrent users** — scaling the streaming layer under simultaneous load.

**Ownership:** Frontend/streaming UX — including getting markdown rendering fully correct in the chat UI — plus the CMS interface used to upload/manage the source documents.

**Numbers:** 5-person team. Peak usage reaches thousands of conversations per day.

**Evidence:** Screenshots at `apps/portfolio/public/project/inspigo-ai/` — `chat-conversation.png`, `roleplay-detail.png`, `evaluation.png`, `generating-evaluasi.png`.
