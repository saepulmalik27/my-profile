'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '@repo/ui/button';
import { useEffect, useRef, useState } from 'react';

export function ChatBox() {
  const [input, setInput] = useState('');

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isLoading = status === 'streaming' || status === 'submitted';

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, status]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ role: 'user', parts: [{ type: 'text', text: input }] });
    setInput('');
  };

  const submitPreset = (text: string) => {
    sendMessage({ role: 'user', parts: [{ type: 'text', text }] });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background rounded-2xl border border-border">
      <div className="p-4 bg-secondary/30 border-b border-border flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <div>
          <h3 className="font-semibold text-sm">Chat with my Resume</h3>
          <p className="text-xs text-muted-foreground">
            Ask me anything about my experience
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground space-y-2 p-4">
            <Bot className="h-8 w-8 opacity-50" />
            <p className="text-sm">
              Hi! I&apos;m Saepul&apos;s AI assistant. How can I help you today?
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button
                onClick={() =>
                  submitPreset('Tell me about your experience at Inspigo.')
                }
                className="text-xs bg-secondary hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1.5 rounded-full cursor-pointer"
              >
                Experience at Inspigo?
              </button>
              <button
                onClick={() => submitPreset('What is your core tech stack?')}
                className="text-xs bg-secondary hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1.5 rounded-full cursor-pointer"
              >
                Core tech stack?
              </button>
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role !== 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}

              <div
                className={`text-sm p-3 rounded-2xl max-w-[85%] ${
                  m.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                    : 'bg-secondary text-secondary-foreground rounded-tl-sm'
                }`}
              >
                {/* Fallback to display string content directly if it's not an array of UIMessageParts */}
                {Array.isArray(m.parts)
                  ? m.parts.map((part, i) =>
                      part.type === 'text' ? (
                        <span key={i}>{part.text}</span>
                      ) : null
                    )
                  : null}
              </div>

              {m.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))
        )}

        {isLoading &&
          (messages.length === 0 ||
            messages[messages.length - 1]?.role === 'user') && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm p-3 rounded-2xl bg-secondary text-secondary-foreground rounded-tl-sm flex items-center">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-secondary/10 border-t border-border">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="rounded-full shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
