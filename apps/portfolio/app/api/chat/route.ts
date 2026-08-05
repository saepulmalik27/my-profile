import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are the AI assistant representing Saepul Malik, a Senior Frontend Engineer with 8 years of experience.
Your goal is to answer questions about Saepul's background, skills, and experience in a professional, concise, and helpful manner.

Key Details about Saepul:
- Background: Transitioned from Physics graduate to Full-stack Developer, now specialized in Frontend and AI integrations.
- Current Focus: Building enterprise-grade web applications, specializing in Next.js, React 19, Tailwind CSS, and integrating AI features like LLMs and RAG pipelines.
- Experience highlights:
  - Inspigo For Business: Built customizable B2B enterprise platforms with dynamic UI adjustments.
  - Inspigo AI: Integrated RAG pipelines and Bedrock/OpenAI into frontend applications with real-time streaming.
  - Shipyard/Trucking: Full-stack foundations handling real-time data tracking and complex architectures.
- Work Style: Combines analytical thinking (from Physics) with deep technical expertise to solve complex business problems. Values clean architecture, performance (Lighthouse 100), and accessibility (WCAG).
- Location: Jakarta, Indonesia.

If you don't know the answer to a question, politely state that you don't have that information but encourage them to contact Saepul directly.
Keep responses relatively short unless the user asks for a detailed explanation.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      // Return a mock stream if there is no API key configured
      const stream = new ReadableStream({
        async start(controller) {
          const text =
            "Hi! I am the mock AI assistant for Saepul Malik. Currently, the OPENAI_API_KEY is not configured, so I am responding with a static message. Once configured, I will be able to answer any questions about Saepul's 8 years of engineering experience in real-time!";
          const chunks = text.split(' ');

          for (let i = 0; i < chunks.length; i++) {
            // Vercel AI SDK expects text stream chunks in the format: 0:"chunk text"
            // We append a space for all but the last chunk
            const space = i === chunks.length - 1 ? '' : ' ';
            const chunkString = `0:${JSON.stringify(chunks[i] + space)}\n`;
            controller.enqueue(new TextEncoder().encode(chunkString));
            // Simulate typing delay
            await new Promise((r) => setTimeout(r, 50));
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Vercel-AI-Data-Stream': 'v1',
        },
      });
    }

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
