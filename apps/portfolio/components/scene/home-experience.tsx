'use client';

import { Lightbulb } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useSceneEngagement } from '../nav/scene-engagement';
import type { AvatarPose } from './avatar';
import { RoomSceneLoader } from './room-scene-loader';

// Owns the DOM-side reaction to what happens inside the 3D scene — the
// canvas itself has no idea about hero text or content reveals, it just
// reports pose changes and "something was clicked" up through here
// (ticket 05: sitting reveals content, sleeping dims + shows a line, a
// first-visit hint nudges discovery and then gets out of the way).

export function HomeExperience() {
  const [pose, setPose] = useState<AvatarPose>('stand');
  // Drives the "try clicking around the room" hint's fade-out on first
  // interaction (nav visibility no longer depends on this — it's always
  // shown now).
  const { hasEngagedHome, markEngaged } = useSceneEngagement();
  // Lifted out of RoomScene so it can be toggled two ways: walking to the
  // in-scene switch, or this component's own "light up the room" button —
  // the default Two Lights mood is intentionally dim, so recruiters who
  // just want to see the room clearly (whatever the avatar's up to) get a
  // direct way to do that without having to discover the switch first.
  const [roomLightOn, setRoomLightOn] = useState(false);

  const handlePoseChange = useCallback((next: AvatarPose) => setPose(next), []);
  const handleInteract = useCallback(() => markEngaged(), [markEngaged]);
  const toggleRoomLight = useCallback(() => setRoomLightOn((on) => !on), []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <RoomSceneLoader
          onAvatarPoseChange={handlePoseChange}
          onInteract={handleInteract}
          roomLightOn={roomLightOn}
          onToggleRoomLight={toggleRoomLight}
        />
      </div>

      <button
        type="button"
        onClick={toggleRoomLight}
        aria-pressed={roomLightOn}
        className="absolute top-20 right-5 z-20 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60"
      >
        <Lightbulb
          className={`h-4 w-4 ${roomLightOn ? 'fill-current text-primary' : 'text-white/70'}`}
        />
        {roomLightOn ? 'Room light on' : 'Light up the room'}
      </button>

      {/* Sleeping dims the scene (ticket 05) — a CSS overlay is simpler and
          just as effective as touching WebGL light intensities for this. */}
      <div
        className={`pointer-events-none absolute inset-0 z-[5] bg-black transition-opacity duration-700 motion-reduce:transition-none ${
          pose === 'sleep' ? 'opacity-30' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Per ticket 04: this text is real, always-present semantic HTML —
          it's what a11y/SEO/reduced-motion users get, not the canvas.
          pointer-events-none on the wrapper because it spans the full
          viewport (h-full) even though the visible text only occupies its
          bottom-left corner — without this, the empty rest of the box
          would silently swallow every click meant for the canvas below.
          Re-enabled per-element on the bits that actually need clicking.
          mx-auto max-w-6xl + the same px-6/md:px-10 as SiteNav's inner
          container, so "Saepul Malik" lines up with the nav logo above it. */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end gap-3 px-6 pb-16 md:px-10 md:pb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Saepul Malik
        </h1>
        <h3 className="text-lg md:text-xl italic font-medium text-amber-500 shadow">
          Frontend Engineer
        </h3>
        <p className="max-w-xl text-base md:text-lg text-white/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Senior Frontend Engineer bridging the gap between analytical Physics
          and cutting-edge web development.
        </p>

        {/* Sitting in the chair is the primary interaction (ticket 05) — it
            reveals the rest of the portfolio content. */}
        {pose === 'sit' && (
          <div className="pointer-events-auto mt-2 max-w-xl rounded-lg border border-white/15 bg-black/40 p-4 backdrop-blur-sm">
            <p className="mb-3 text-sm text-white/80">
              8 years bridging Physics, full-stack foundations, and a
              frontend/AI specialization — building enterprise-grade interfaces
              with React, Next.js, and RAG-powered AI features.
            </p>
            <a
              href="/frontend-engineer.pdf"
              className="text-sm font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              Download CV
            </a>
          </div>
        )}
      </div>

      {pose === 'sleep' && (
        <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex justify-center px-6">
          <p className="rounded-full bg-black/50 px-4 py-2 text-center text-sm text-white/80">
            Zzz — even after 8 years of shipping code, a senior engineer still
            needs rest.
          </p>
        </div>
      )}

      {!hasEngagedHome && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center transition-opacity duration-700">
          <p className="rounded-full bg-black/40 px-4 py-1.5 text-xs text-white/70">
            try clicking around the room
          </p>
        </div>
      )}
    </section>
  );
}
