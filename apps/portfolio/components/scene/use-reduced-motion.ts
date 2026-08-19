'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

// This hook only ever runs inside the client-only 3D scene (dynamically
// imported with ssr:false), so there's no real SSR snapshot to reconcile —
// still required by useSyncExternalStore's signature, never exercised.
function getServerSnapshot() {
  return false;
}

// Ticket 04: prefers-reduced-motion disables avatar walk animation, camera
// drift, and any ambient motion — the room stays visually present but
// static rather than animating. useSyncExternalStore (rather than
// useState+useEffect) is the correct primitive for "read an external,
// changeable value" — it also avoids the direct setState-in-effect pattern.
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
