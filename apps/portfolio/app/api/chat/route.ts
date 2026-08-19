import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  type UIMessage,
} from 'ai';
import { deepseek } from '@ai-sdk/deepseek';
import { buildSystemPrompt } from '../../../content/system-prompt';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!process.env.DEEPSEEK_API_KEY) {
      // Mock stream when no API key is configured — built with the same UI
      // Message Stream protocol useChat expects for the real path below.
      // A hand-rolled legacy text-stream here fails to parse client-side.
      const text =
        "Hi! I am the mock AI assistant for Saepul Malik. Currently, the DEEPSEEK_API_KEY is not configured, so I am responding with a static message. Once configured, I will be able to answer any questions about Saepul's 8 years of engineering experience in real-time!";

      const stream = createUIMessageStream({
        execute: async ({ writer }) => {
          const id = 'mock-response';
          writer.write({ type: 'text-start', id });
          for (const word of text.split(' ')) {
            writer.write({ type: 'text-delta', id, delta: `${word} ` });
            await new Promise((resolve) => setTimeout(resolve, 50));
          }
          writer.write({ type: 'text-end', id });
        },
      });

      return createUIMessageStreamResponse({ stream });
    }

    // useChat sends UIMessage[] (the `parts`-based client format);
    // streamText needs ModelMessage[] (the `content`-based model format) —
    // convertToModelMessages bridges the two. Passing UIMessage[] straight
    // through is what caused AI_InvalidPromptError.
    const result = streamText({
      model: deepseek('deepseek-chat'),
      system: buildSystemPrompt(),
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
