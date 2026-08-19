'use client';

import dynamic from 'next/dynamic';
import type { AvatarPose } from './avatar';

// Client-only: three.js/R3F cannot run during SSR. Per ticket 02/04, this
// dynamic(ssr:false) call must live inside a Client Component boundary —
// Next.js 16 rejects ssr:false directly inside a Server Component.
const RoomScene = dynamic(() => import('./room-scene'), {
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
