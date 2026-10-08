'use client';

import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { useReducedMotion } from './use-reduced-motion';

// 2D side-view hero, drawn in Rive (source: rive/hero/scene.rml, built to
// public/hero.riv with `pnpm rive:build`). The .riv is visuals only — it
// exposes a "Hero" view model and animates whatever it's told. All the
// behaviour (hit-testing, walking, what happens on arrival, the sleep
// timer) lives here, so there's one place to read the interaction logic.

export type AvatarPose = 'stand' | 'sit' | 'sleep';
type AvatarAction = 'walk' | 'sit' | 'sleep' | 'toggleWindow' | 'toggleLight';

// Numeric `pose` values the .riv's Pose state machine layer switches on.
const POSE_VALUE = { stand: 0, walk: 1, sit: 2, sleep: 3 } as const;

const ARTBOARD_WIDTH = 1600;
const ARTBOARD_HEIGHT = 900;
const FLOOR_TOP = 700;
const MIN_X = 140;
const MAX_X = 1460;
const WALK_SPEED = 420; // artboard px/sec
const SLEEP_DURATION_MS = 4000;

// Must match the furniture positions in rive/hero/scene.rml — keep the two
// in sync when something in the room moves. `rect` is the clickable area,
// `x`/`facing` where the avatar stands (and which way it looks) to act.
const HOTSPOTS: Array<{
  action: Exclude<AvatarAction, 'walk'>;
  rect: [x0: number, y0: number, x1: number, y1: number];
  x: number;
  facing: 1 | -1;
}> = [
  { action: 'toggleLight', rect: [90, 430, 150, 515], x: 160, facing: -1 },
  { action: 'sleep', rect: [180, 570, 580, 760], x: 520, facing: 1 },
  { action: 'toggleWindow', rect: [560, 165, 820, 475], x: 690, facing: 1 },
  { action: 'sit', rect: [950, 580, 1065, 790], x: 1010, facing: 1 },
];

const LAYOUT = new Layout({
  fit: Fit.Cover,
  alignment: Alignment.BottomCenter,
});

// Inverse of Fit.Cover + BottomCenter: element-space pointer → artboard space.
function toArtboard(event: MouseEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  const scale = Math.max(
    box.width / ARTBOARD_WIDTH,
    box.height / ARTBOARD_HEIGHT
  );
  const offsetX = (box.width - ARTBOARD_WIDTH * scale) / 2;
  const offsetY = box.height - ARTBOARD_HEIGHT * scale;
  return {
    x: (event.clientX - box.left - offsetX) / scale,
    y: (event.clientY - box.top - offsetY) / scale,
  };
}

function hotspotAt(x: number, y: number) {
  return HOTSPOTS.find(
    ({ rect: [x0, y0, x1, y1] }) => x >= x0 && x <= x1 && y >= y0 && y <= y1
  );
}

export default function HeroRive({
  onAvatarPoseChange,
  onInteract,
  roomLightOn,
  onToggleRoomLight,
}: {
  onAvatarPoseChange?: (pose: AvatarPose) => void;
  onInteract?: () => void;
  // Controlled from HomeExperience so the in-scene switch and the DOM
  // "light up the room" button toggle the same state.
  roomLightOn: boolean;
  onToggleRoomLight: () => void;
}) {
  const { rive, RiveComponent } = useRive({
    src: '/hero.riv',
    stateMachines: 'Hero',
    autoplay: true,
    autoBind: true,
    layout: LAYOUT,
  });
  const reducedMotion = useReducedMotion();
  const [pose, setPose] = useState<AvatarPose>('stand');
  const [windowOpen, setWindowOpen] = useState(false);
  const avatarX = useRef(800);
  const frame = useRef<number | null>(null);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setNumber = useCallback(
    (name: string, value: number) => {
      const prop = rive?.viewModelInstance?.number(name);
      if (prop) prop.value = value;
    },
    [rive]
  );

  const applyPose = useCallback(
    (next: AvatarPose) => {
      setPose(next);
      setNumber('pose', POSE_VALUE[next]);
      onAvatarPoseChange?.(next);
    },
    [setNumber, onAvatarPoseChange]
  );

  useEffect(
    () => setNumber('roomLight', roomLightOn ? 1 : 0),
    [setNumber, roomLightOn]
  );
  useEffect(
    () => setNumber('windowOpen', windowOpen ? 1 : 0),
    [setNumber, windowOpen]
  );
  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    []
  );

  const arrive = useCallback(
    (action: AvatarAction) => {
      if (action === 'sit' || action === 'sleep') {
        applyPose(action);
        return;
      }
      applyPose('stand');
      if (action === 'toggleWindow') setWindowOpen((open) => !open);
      else if (action === 'toggleLight') onToggleRoomLight();
    },
    [applyPose, onToggleRoomLight]
  );

  const walkTo = useCallback(
    (x: number, action: AvatarAction, facing?: 1 | -1) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      const target = Math.min(MAX_X, Math.max(MIN_X, x));
      const finish = () => {
        frame.current = null;
        if (facing) setNumber('facing', facing);
        arrive(action);
      };

      // Reduced motion: snap straight to the target, no walk cycle.
      if (reducedMotion) {
        avatarX.current = target;
        setNumber('avatarX', target);
        finish();
        return;
      }

      if (target !== avatarX.current) {
        setNumber('facing', target < avatarX.current ? -1 : 1);
      }
      setNumber('pose', POSE_VALUE.walk);
      let last = performance.now();
      const step = (now: number) => {
        const dt = (now - last) / 1000;
        last = now;
        const remaining = target - avatarX.current;
        const move =
          Math.sign(remaining) * Math.min(Math.abs(remaining), WALK_SPEED * dt);
        avatarX.current += move;
        setNumber('avatarX', avatarX.current);
        if (Math.abs(target - avatarX.current) < 0.5) finish();
        else frame.current = requestAnimationFrame(step);
      };
      frame.current = requestAnimationFrame(step);
    },
    [reducedMotion, setNumber, arrive]
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { x, y } = toArtboard(event);
      const hotspot = hotspotAt(x, y);
      if (!hotspot && y < FLOOR_TOP) return;

      // Any click wakes the avatar from sit/sleep and marks the visitor as
      // having engaged with the scene (drives the first-visit hint).
      onInteract?.();
      if (sleepTimer.current) {
        clearTimeout(sleepTimer.current);
        sleepTimer.current = null;
      }
      applyPose('stand');

      if (hotspot) walkTo(hotspot.x, hotspot.action, hotspot.facing);
      else walkTo(x, 'walk');
    },
    [onInteract, applyPose, walkTo]
  );

  const handlePointerMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const { x, y } = toArtboard(event);
    event.currentTarget.style.cursor =
      hotspotAt(x, y) || y >= FLOOR_TOP ? 'pointer' : 'auto';
  }, []);

  // Sleeping is a self-exiting easter egg — wake up after a few seconds if
  // nothing else interrupts it first.
  useEffect(() => {
    if (pose !== 'sleep') return;
    sleepTimer.current = setTimeout(
      () => applyPose('stand'),
      SLEEP_DURATION_MS
    );
    return () => {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
    };
  }, [pose, applyPose]);

  return (
    <div
      className="h-full w-full bg-[#12141f]"
      onClick={handleClick}
      onMouseMove={handlePointerMove}
    >
      <RiveComponent className="h-full w-full" />
    </div>
  );
}
