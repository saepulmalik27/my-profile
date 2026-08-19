'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { AMBER, INK, PAPER } from './theme';

// Primitive stand-in for the rigged Mixamo/Quaternius character (ticket 02).
// Walk logic (step toward target + turn-to-face + arrive) is the real
// deliverable here — the mesh itself is a placeholder swapped out later
// without touching this movement code.

const WALK_SPEED = 2.2; // units/sec
const ARRIVE_EPSILON = 0.05;

export function Avatar({
  target,
  onArrive,
  startPosition = [0, 0, 0.6],
}: {
  target: THREE.Vector3 | null;
  onArrive: () => void;
  startPosition?: [number, number, number];
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const node = group.current;
    if (!node || !target) return;

    const current = node.position;
    const toTarget = new THREE.Vector3().subVectors(target, current);
    toTarget.y = 0;
    const distance = toTarget.length();

    if (distance <= ARRIVE_EPSILON) {
      onArrive();
      return;
    }

    toTarget.normalize();
    const step = Math.min(WALK_SPEED * delta, distance);
    current.addScaledVector(toTarget, step);

    // Face the direction of travel.
    const desiredYaw = Math.atan2(toTarget.x, toTarget.z);
    node.rotation.y = THREE.MathUtils.damp(
      node.rotation.y,
      desiredYaw,
      10,
      delta
    );
  });

  return (
    <group ref={group} position={startPosition}>
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
  );
}
