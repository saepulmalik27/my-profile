'use client';

import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Avatar,
  type AvatarAction,
  type AvatarPose,
  type WalkTarget,
} from './avatar';
import { INTERACTION_POINTS, RoomFurniture } from './furniture';
import { AMBER, CYAN, DUSK, INK, PAPER, SURFACE } from './theme';
import { useDeviceCapability } from './use-device-capability';
import { useReducedMotion } from './use-reduced-motion';

const PERF_SAMPLE_FRAMES = 30;
const SLOW_FRAME_MS = 33; // ~30fps

// Runtime half of the capability probe (ticket 04): the initial tier guess
// in use-device-capability.ts can be wrong in either direction, so this
// samples real frame times for the first ~30 frames and downgrades once,
// permanently, if they're consistently slow. Never upgrades back — a
// one-way drop avoids visibly flickering quality up and down.
function PerfMonitor({ onSlow }: { onSlow: () => void }) {
  const samples = useRef(0);
  const totalMs = useRef(0);
  const finished = useRef(false);

  useFrame((_, delta) => {
    if (finished.current) return;
    samples.current += 1;
    totalMs.current += delta * 1000;
    if (samples.current >= PERF_SAMPLE_FRAMES) {
      finished.current = true;
      if (totalMs.current / samples.current > SLOW_FRAME_MS) onSlow();
    }
  });

  return null;
}

// "Two Lights" baseline (ticket 03): the room has exactly two default light
// sources — desk lamp amber and monitor cyan. Room light and window (this
// file) and sit/sleep (avatar.tsx) are ticket 05's interactions.

// Interior bounds the avatar can walk to, kept a little inside the walls at
// x=-3 / z=-3 so it doesn't clip into them. Obstacle (desk/sofa) collision
// lives in avatar.tsx, sourced from furniture.tsx's OBSTACLES.
const MIN_X = -2.7;
const MAX_X = 2.7;
const MIN_Z = -2.7;
const MAX_Z = 2.7;

const SLEEP_DURATION_MS = 4000;

export default function RoomScene({
  onAvatarPoseChange,
  onInteract,
  roomLightOn,
  onToggleRoomLight,
}: {
  onAvatarPoseChange?: (pose: AvatarPose) => void;
  onInteract?: () => void;
  // Controlled from HomeExperience so the same state can be toggled either
  // by walking to the in-scene switch, or by the always-visible "light up
  // the room" DOM button — recruiters shouldn't have to find the switch
  // first just to see the room clearly.
  roomLightOn: boolean;
  onToggleRoomLight: () => void;
}) {
  const [walkTarget, setWalkTarget] = useState<WalkTarget | null>(null);
  const [pose, setPose] = useState<AvatarPose>('stand');
  const [windowOpen, setWindowOpen] = useState(false);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useReducedMotion();
  const { supported, tier, downgrade } = useDeviceCapability();

  const setPoseAndNotify = useCallback(
    (next: AvatarPose) => {
      setPose(next);
      onAvatarPoseChange?.(next);
    },
    [onAvatarPoseChange]
  );

  // Any click — walking or interacting with an object — both wakes the
  // avatar up if it was sleeping/sitting, and signals "the visitor has
  // engaged with the scene" (used for the first-visit hint, and later
  // ticket 07's nav reveal).
  const beginInteraction = useCallback(() => {
    onInteract?.();
    if (sleepTimer.current) {
      clearTimeout(sleepTimer.current);
      sleepTimer.current = null;
    }
    setPoseAndNotify('stand');
  }, [onInteract, setPoseAndNotify]);

  const handleFloorClick = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      beginInteraction();
      const point = event.point.clone();
      point.x = THREE.MathUtils.clamp(point.x, MIN_X, MAX_X);
      point.z = THREE.MathUtils.clamp(point.z, MIN_Z, MAX_Z);
      point.y = 0;
      setWalkTarget({ point, action: 'walk' });
    },
    [beginInteraction]
  );

  const handleObjectInteract = useCallback(
    (action: AvatarAction) => {
      beginInteraction();
      const key =
        action === 'sit'
          ? 'chair'
          : action === 'sleep'
            ? 'bed'
            : action === 'toggleWindow'
              ? 'window'
              : 'lightSwitch';
      const { point, yaw } = INTERACTION_POINTS[key];
      setWalkTarget({ point: new THREE.Vector3(...point), yaw, action });
    },
    [beginInteraction]
  );

  const handleArrive = useCallback(
    (action: AvatarAction) => {
      setWalkTarget(null);
      if (action === 'sit') {
        setPoseAndNotify('sit');
      } else if (action === 'sleep') {
        setPoseAndNotify('sleep');
      } else if (action === 'toggleWindow') {
        setWindowOpen((open) => !open);
      } else if (action === 'toggleLight') {
        onToggleRoomLight();
      }
    },
    [setPoseAndNotify, onToggleRoomLight]
  );

  // Sleeping is a playful, self-exiting easter egg (ticket 05) — wake up on
  // its own after a few seconds if nothing else interrupts it first.
  useEffect(() => {
    if (pose !== 'sleep') return;
    sleepTimer.current = setTimeout(() => {
      setPoseAndNotify('stand');
    }, SLEEP_DURATION_MS);
    return () => {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
    };
  }, [pose, setPoseAndNotify]);

  // No WebGL at all (rare) — nothing to render; the real content is the
  // static semantic HTML in HomeExperience, so this is a safe no-op rather
  // than a crash.
  if (!supported) {
    return <div className="h-full w-full bg-[#12141f]" />;
  }

  return (
    <Canvas
      // "percentage" maps to THREE.PCFShadowMap directly — the plain
      // `shadows` boolean shorthand requests the now-deprecated
      // PCFSoftShadowMap (three.js r183+), which just warns and falls
      // back to this same type anyway. Shadows off entirely on the low
      // tier (ticket 04's capability probe).
      shadows={tier === 'high' ? 'percentage' : false}
      dpr={tier === 'high' ? [1, 2] : 1}
      camera={{ position: [3.4, 2, 4.4], fov: 42 }}
      gl={{ antialias: tier === 'high' }}
    >
      {tier === 'high' && <PerfMonitor onSlow={downgrade} />}
      <color attach="background" args={[INK]} />
      <fog attach="fog" args={[INK, 6, 14]} />

      <ambientLight
        intensity={roomLightOn ? 0.5 : 0.12}
        color={roomLightOn ? PAPER : INK}
      />
      {/* Lamp — warm key light. Désaturates when the room light floods in. */}
      <pointLight
        position={[-1.4, 1.4, 0.8]}
        intensity={roomLightOn ? 3.5 : 10}
        distance={5}
        decay={2}
        color={AMBER}
        castShadow
      />
      {/* Monitor — cool key light. Same désaturation under the room light. */}
      <pointLight
        position={[0.6, 1, 0.4]}
        intensity={roomLightOn ? 2.5 : 7}
        distance={4}
        decay={2}
        color={CYAN}
      />
      {/* Room light — off by default (ticket 03/05); a warm practical
          flood, deliberately the "wrong"/flattening state, not the norm. */}
      {roomLightOn && (
        <pointLight
          position={[0, 4.6, -1]}
          intensity={7}
          distance={9}
          decay={2}
          color={PAPER}
        />
      )}
      {/* Window — closed by default; open spills dusk-violet moonlight in
          as a third, borrowed rim light (ticket 03), never a key light. */}
      {windowOpen && (
        <pointLight
          position={[1.6, 1.6, -2]}
          intensity={3}
          distance={6}
          decay={2}
          color={DUSK}
        />
      )}

      {/* Floor — click-to-walk target surface (ticket 02) */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        onClick={handleFloorClick}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={SURFACE} roughness={0.95} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2.5, -3]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color={INK} roughness={1} />
      </mesh>

      {/* Side wall */}
      <mesh position={[-3, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color={INK} roughness={1} />
      </mesh>

      <RoomFurniture
        windowOpen={windowOpen}
        roomLightOn={roomLightOn}
        onInteract={handleObjectInteract}
      />
      <Avatar
        target={walkTarget}
        onArrive={handleArrive}
        pose={pose}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}
