'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { ChatBox } from './chat-box';

// Persistent, site-wide floating widget (ticket 12) — mounted once in the
// root layout so it appears identically on every page (including the 3D
// home scene) and the conversation survives client-side route navigation,
// since this component never unmounts between pages.
export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Chat with my resume'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_4px_20px_-6px_rgba(242,166,90,0.6)] transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            <span
              aria-hidden="true"
              className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_8px_1px_rgba(111,226,214,0.8)]"
            />
          </>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[560px] sm:w-[380px]">
          <ChatBox />
        </div>
      )}
    </>
  );
}
