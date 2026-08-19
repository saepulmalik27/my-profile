'use client';

import dynamic from 'next/dynamic';

// Client-only: three.js/R3F cannot run during SSR. Per ticket 02/04, this
// dynamic(ssr:false) call must live inside a Client Component boundary —
// Next.js 16 rejects ssr:false directly inside a Server Component.
const RoomScene = dynamic(() => import('./room-scene'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#12141f]" />,
});

export function RoomSceneLoader() {
  return <RoomScene />;
}
