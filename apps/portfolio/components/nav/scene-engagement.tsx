'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

// Shared between HomeExperience (deep inside the 3D scene's page tree) and
// SiteNav (mounted once in the root layout, a sibling of that tree) so the
// nav's "hidden until engaged" rule (ticket 07) reacts to the same
// first-click signal that fades ticket 05's discovery hint.
type SceneEngagementValue = {
  hasEngagedHome: boolean;
  markEngaged: () => void;
};

const SceneEngagementContext = createContext<SceneEngagementValue | null>(null);

export function SceneEngagementProvider({ children }: { children: ReactNode }) {
  const [hasEngagedHome, setHasEngagedHome] = useState(false);
  const markEngaged = useCallback(() => setHasEngagedHome(true), []);

  return (
    <SceneEngagementContext.Provider value={{ hasEngagedHome, markEngaged }}>
      {children}
    </SceneEngagementContext.Provider>
  );
}

export function useSceneEngagement(): SceneEngagementValue {
  const ctx = useContext(SceneEngagementContext);
  if (!ctx) {
    throw new Error(
      'useSceneEngagement must be used within SceneEngagementProvider'
    );
  }
  return ctx;
}
