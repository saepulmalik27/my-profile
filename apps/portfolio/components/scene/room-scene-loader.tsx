'use client';

import dynamic from 'next/dynamic';
import type { AvatarPose } from './hero-rive';

// Client-only: the Rive runtime (WASM + canvas) cannot run during SSR. This
// dynamic(ssr:false) call must live inside a Client Component boundary —
// Next.js 16 rejects ssr:false directly inside a Server Component.
const RoomScene = dynamic(() => import('./hero-rive'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#12141f]" />,
});

export function RoomSceneLoader({
  onAvatarPoseChange,
  onInteract,
  roomLightOn,
  onToggleRoomLight,
}: {
  onAvatarPoseChange?: (pose: AvatarPose) => void;
  onInteract?: () => void;
  roomLightOn: boolean;
  onToggleRoomLight: () => void;
}) {
  return (
    <RoomScene
      onAvatarPoseChange={onAvatarPoseChange}
      onInteract={onInteract}
      roomLightOn={roomLightOn}
      onToggleRoomLight={onToggleRoomLight}
    />
  );
}
