'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { OBSTACLES } from './furniture';
import { AMBER, INK, PAPER } from './theme';

// Primitive stand-in for the rigged Mixamo/Quaternius character (ticket 02).
// Walk logic (step toward target + face travel direction + arrive, then
// settle into the target's pose) is the real deliverable — the mesh itself
// is a placeholder swapped out later without touching this movement code.

const WALK_SPEED = 2.2; // units/sec
const ARRIVE_EPSILON = 0.05;
const AVATAR_RADIUS = 0.22;

function collidesAt(x: number, z: number): boolean {
  for (const o of OBSTACLES) {
    if (
      x > o.min[0] - AVATAR_RADIUS &&
      x < o.max[0] + AVATAR_RADIUS &&
      z > o.min[1] - AVATAR_RADIUS &&
      z < o.max[1] + AVATAR_RADIUS
    ) {
      return true;
    }
  }
  return false;
}

export type AvatarAction =
  'walk' | 'sit' | 'sleep' | 'toggleWindow' | 'toggleLight';
export type AvatarPose = 'stand' | 'sit' | 'sleep';

export type WalkTarget = {
  point: THREE.Vector3;
  /** Face this direction on arrival, overriding travel-direction facing. */
  yaw?: number;
  action: AvatarAction;
};

const POSE_OFFSET: Record<AvatarPose, [number, number, number]> = {
  stand: [0, 0, 0],
  sit: [0, -0.22, 0],
  sleep: [0, -0.4, 0],
};

export function Avatar({
  target,
  onArrive,
  pose,
  reducedMotion = false,
  startPosition = [0, 0, 0.6],
}: {
  target: WalkTarget | null;
  onArrive: (action: AvatarAction) => void;
  pose: AvatarPose;
  /** Ticket 04: skip the walk animation and snap straight to the target. */
  reducedMotion?: boolean;
  startPosition?: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const node = group.current;
    if (!node || !target) return;

    if (reducedMotion) {
      node.position.x = target.point.x;
      node.position.z = target.point.z;
      if (target.yaw !== undefined) node.rotation.y = target.yaw;
      onArrive(target.action);
      return;
    }

    const current = node.position;
    const toTarget = new THREE.Vector3().subVectors(target.point, current);
    toTarget.y = 0;
    const distance = toTarget.length();

    if (distance <= ARRIVE_EPSILON) {
      if (target.yaw !== undefined) node.rotation.y = target.yaw;
      onArrive(target.action);
      return;
    }

    toTarget.normalize();
    const step = Math.min(WALK_SPEED * delta, distance);
    const dx = toTarget.x * step;
    const dz = toTarget.z * step;

    // Box3 collision (ticket 02) with simple axis-separated sliding: if the
    // direct diagonal move is blocked but moving along just one axis isn't,
    // take that axis instead — reads as walking around a corner rather than
    // stopping dead against it.
    if (collidesAt(current.x + dx, current.z + dz)) {
      const xOk = !collidesAt(current.x + dx, current.z);
      const zOk = !collidesAt(current.x, current.z + dz);
      if (xOk) current.x += dx;
      if (zOk) current.z += dz;
    } else {
      current.x += dx;
      current.z += dz;
    }

    // Face the direction of travel.
    const desiredYaw = Math.atan2(toTarget.x, toTarget.z);
    node.rotation.y = THREE.MathUtils.damp(
      node.rotation.y,
      desiredYaw,
      10,
      delta
    );
  });

  const [ox, oy, oz] = POSE_OFFSET[pose];
  const lying = pose === 'sleep';

  return (
    <group ref={group} position={startPosition}>
      <group
        position={[ox, oy, oz]}
        rotation={lying ? [Math.PI / 2, 0, 0] : [0, 0, 0]}
      >
        {/* Body */}
        <mesh position={[0, 0.55, 0]} castShadow>
          <capsuleGeometry args={[0.18, 0.5, 4, 8]} />
          <meshStandardMaterial color={INK} roughness={0.85} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 1.05, 0]} castShadow>
          <sphereGeometry args={[0.14, 12, 12]} />
          <meshStandardMaterial color={PAPER} roughness={0.8} />
        </mesh>
        {/* Facing indicator — reads as a warm "chest light" so travel
            direction is legible even on a placeholder capsule body. */}
        <mesh position={[0, 0.6, 0.16]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color={AMBER}
            emissive={AMBER}
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}
