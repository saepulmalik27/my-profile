'use client';

import { Canvas, type ThreeEvent } from '@react-three/fiber';
import { useCallback, useState } from 'react';
import * as THREE from 'three';
import { Avatar } from './avatar';
import { RoomFurniture } from './furniture';
import { AMBER, CYAN, INK, SURFACE } from './theme';

// "Two Lights" baseline (ticket 03): the room has exactly two default light
// sources — desk lamp amber and monitor cyan. No overhead room light yet;
// that's a later ticket-05 interaction, not part of this foundation pass.

// Interior bounds the avatar can walk to, kept a little inside the walls at
// x=-3 / z=-3 so it doesn't clip into them. No furniture-obstacle avoidance
// yet (ticket 02 calls for Box3 collision) — this pass is click-to-walk +
// room bounds only; walking through a desk/bed is a follow-up.
const MIN_X = -2.7;
const MAX_X = 2.7;
const MIN_Z = -2.7;
const MAX_Z = 2.7;

export default function RoomScene() {
  const [walkTarget, setWalkTarget] = useState<THREE.Vector3 | null>(null);

  const handleFloorClick = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const point = event.point.clone();
    point.x = THREE.MathUtils.clamp(point.x, MIN_X, MAX_X);
    point.z = THREE.MathUtils.clamp(point.z, MIN_Z, MAX_Z);
    point.y = 0;
    setWalkTarget(point);
  }, []);

  const handleArrive = useCallback(() => setWalkTarget(null), []);

  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2, 4.4], fov: 42 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={[INK]} />
      <fog attach="fog" args={[INK, 6, 14]} />

      <ambientLight intensity={0.12} color={INK} />
      <pointLight
        position={[-1.4, 1.4, 0.8]}
        intensity={10}
        distance={5}
        decay={2}
        color={AMBER}
        castShadow
      />
      <pointLight
        position={[0.6, 1, 0.4]}
        intensity={7}
        distance={4}
        decay={2}
        color={CYAN}
      />

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

      <RoomFurniture />
      <Avatar target={walkTarget} onArrive={handleArrive} />
    </Canvas>
  );
}
