'use client';

import { useCallback, useState } from 'react';

// Ticket 04: no UA-sniffing. WebGL support is feature-detected directly;
// the starting quality tier comes from feature-detected hardware signals
// (core count, device memory — not the user-agent string), then corrected
// downward at runtime if actual frame times turn out slow (see
// PerfMonitor in room-scene.tsx). Everyone still gets the real interactive
// scene — this only ever drops fidelity, never swaps in a static image.
export type QualityTier = 'high' | 'low';

function detectWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

function guessInitialTier(): QualityTier {
  const cores = navigator.hardwareConcurrency ?? 8;
  // deviceMemory is a non-standard, Chromium-only API — feature-detected
  // with a fallback, not a UA string check.
  const memory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  return cores <= 4 || memory <= 4 ? 'low' : 'high';
}

export function useDeviceCapability() {
  // Lazy initializers, not useState+useEffect: this hook only ever runs
  // inside the client-only 3D scene (dynamically imported with
  // ssr:false), so there's no SSR snapshot to reconcile against — the
  // real value can just be the first render's value, with no extra
  // "corrected after mount" re-render.
  const [supported] = useState(() => detectWebGLSupport());
  const [tier, setTier] = useState<QualityTier>(() => guessInitialTier());

  const downgrade = useCallback(() => setTier('low'), []);

  return { supported, tier, downgrade };
}
