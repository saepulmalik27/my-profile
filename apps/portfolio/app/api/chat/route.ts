import { streamText } from 'ai';
import { deepseek } from '@ai-sdk/deepseek';
import { buildSystemPrompt } from '../../../content/system-prompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.DEEPSEEK_API_KEY) {
      // Return a mock stream if there is no API key configured
      const stream = new ReadableStream({
        async start(controller) {
          const text =
            "Hi! I am the mock AI assistant for Saepul Malik. Currently, the DEEPSEEK_API_KEY is not configured, so I am responding with a static message. Once configured, I will be able to answer any questions about Saepul's 8 years of engineering experience in real-time!";
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
      model: deepseek('deepseek-chat'),
      system: buildSystemPrompt(),
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
