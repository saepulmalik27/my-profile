import type { ThreeEvent } from '@react-three/fiber';
import { AMBER, CYAN, DUSK, INK, PAPER, SURFACE } from './theme';
import type { AvatarAction } from './avatar';

// Block-out geometry for the room (ticket 02: low-poly stand-ins now,
// swapped for real Kenney/Quaternius CC0 models later — layout/position
// code here shouldn't need to change when that happens).

const DESK_LEG_POSITIONS: Array<[number, number]> = [
  [-0.65, -0.25],
  [0.65, -0.25],
  [-0.65, 0.25],
  [0.65, 0.25],
];

const CHAIR_LEG_POSITIONS: Array<[number, number]> = [
  [-0.19, -0.19],
  [0.19, -0.19],
  [-0.19, 0.19],
  [0.19, 0.19],
];

// Single source of truth for "where the avatar stands, and which way it
// faces, to perform each interaction" (ticket 05) — shared between the
// click handlers below and room-scene.tsx, which turns these into walk
// targets. Coordinates are world-space, matching each piece's own group
// position elsewhere in this file.
export const INTERACTION_POINTS: Record<
  'chair' | 'bed' | 'window' | 'lightSwitch',
  { point: [number, number, number]; yaw: number }
> = {
  chair: { point: [1.1, 0, -1.7], yaw: Math.PI },
  bed: { point: [-2.05, 0, 0.4], yaw: 0 },
  window: { point: [2.1, 0, -2.2], yaw: Math.PI },
  lightSwitch: { point: [-2.5, 0, 1.8], yaw: -Math.PI / 2 },
};

// Obstacle AABBs (world-space XZ footprints) the avatar can't walk through
// (ticket 02's Box3 collision). Only pieces with no interaction point *on
// top of them* are listed — the bed's sleep target sits inside its own
// footprint (you walk into a bed to lie in it), so it's deliberately not
// an obstacle; same reasoning excludes the chair, whose sit target is its
// own position.
export const OBSTACLES: Array<{
  min: [number, number];
  max: [number, number];
}> = [
  // Desk — top spans local x:[-0.7,0.7] z:[-0.3,0.3] around its [1.1,0,-2.6] origin.
  { min: [0.4, -2.9], max: [1.8, -2.3] },
  // Sofa — seat spans local x:[-0.65,0.65] z:[-0.31,0.31] around its [-1.7,0,-2.35] origin.
  { min: [-2.35, -2.66], max: [-1.05, -2.04] },
];

function interactiveProps(
  onInteract: (action: AvatarAction) => void,
  action: AvatarAction
) {
  return {
    onClick: (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      onInteract(action);
    },
    onPointerOver: (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      document.body.style.cursor = 'pointer';
    },
    onPointerOut: () => {
      document.body.style.cursor = 'auto';
    },
  };
}

function Desk() {
  return (
    <group position={[1.1, 0, -2.6]}>
      <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.06, 0.6]} />
        <meshStandardMaterial color={SURFACE} roughness={0.8} />
      </mesh>
      {DESK_LEG_POSITIONS.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.36, z]} castShadow>
          <boxGeometry args={[0.06, 0.72, 0.06]} />
          <meshStandardMaterial color={INK} roughness={0.9} />
        </mesh>
      ))}
      {/* Monitor */}
      <mesh position={[0, 1.05, -0.18]} castShadow>
        <boxGeometry args={[0.5, 0.32, 0.03]} />
        <meshStandardMaterial color={INK} roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.05, -0.165]}>
        <planeGeometry args={[0.44, 0.26]} />
        <meshStandardMaterial
          color={CYAN}
          emissive={CYAN}
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0.85, -0.15]} castShadow>
        <boxGeometry args={[0.06, 0.16, 0.06]} />
        <meshStandardMaterial color={INK} roughness={0.7} />
      </mesh>
      {/* Desk lamp */}
      <mesh position={[0.55, 0.78, 0.15]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 0.05, 12]} />
        <meshStandardMaterial color={INK} roughness={0.6} />
      </mesh>
      <mesh position={[0.5, 1.05, 0.1]} castShadow>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial
          color={AMBER}
          emissive={AMBER}
          emissiveIntensity={1.6}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function Chair({ onInteract }: { onInteract: (action: AvatarAction) => void }) {
  return (
    <group position={[1.1, 0, -1.7]} {...interactiveProps(onInteract, 'sit')}>
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.46, 0.06, 0.46]} />
        <meshStandardMaterial color={SURFACE} roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.75, 0.21]} castShadow>
        <boxGeometry args={[0.46, 0.55, 0.06]} />
        <meshStandardMaterial color={SURFACE} roughness={0.85} />
      </mesh>
      {CHAIR_LEG_POSITIONS.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.22, z]} castShadow>
          <boxGeometry args={[0.05, 0.44, 0.05]} />
          <meshStandardMaterial color={INK} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Bed({ onInteract }: { onInteract: (action: AvatarAction) => void }) {
  return (
    <group
      position={[-2.55, 0, 0.4]}
      {...interactiveProps(onInteract, 'sleep')}
    >
      {/* Headboard, against the side wall */}
      <mesh position={[0.12, 0.75, -1.15]} castShadow>
        <boxGeometry args={[0.08, 1.1, 1.5]} />
        <meshStandardMaterial color={SURFACE} roughness={0.9} />
      </mesh>
      {/* Frame + mattress */}
      <mesh position={[0.5, 0.28, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.9, 0.32, 2.2]} />
        <meshStandardMaterial color={INK} roughness={0.95} />
      </mesh>
      <mesh position={[0.5, 0.48, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.86, 0.16, 2.1]} />
        <meshStandardMaterial color={DUSK} roughness={0.9} />
      </mesh>
      {/* Pillow */}
      <mesh position={[0.5, 0.62, -0.85]} castShadow>
        <boxGeometry args={[0.62, 0.1, 0.36]} />
        <meshStandardMaterial color={PAPER} roughness={0.95} />
      </mesh>
    </group>
  );
}

function Sofa() {
  return (
    <group position={[-1.7, 0, -2.35]}>
      <mesh position={[0, 0.24, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.32, 0.62]} />
        <meshStandardMaterial color={SURFACE} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.58, -0.24]} castShadow>
        <boxGeometry args={[1.3, 0.4, 0.14]} />
        <meshStandardMaterial color={SURFACE} roughness={0.9} />
      </mesh>
      {[-0.65, 0.65].map((x, i) => (
        <mesh key={i} position={[x, 0.42, 0.02]} castShadow>
          <boxGeometry args={[0.12, 0.28, 0.6]} />
          <meshStandardMaterial color={SURFACE} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Window({
  open,
  onInteract,
}: {
  open: boolean;
  onInteract: (action: AvatarAction) => void;
}) {
  return (
    <group
      position={[2.1, 1.9, -2.97]}
      {...interactiveProps(onInteract, 'toggleWindow')}
    >
      <mesh castShadow>
        <boxGeometry args={[1.3, 1.5, 0.08]} />
        <meshStandardMaterial color={INK} roughness={0.8} />
      </mesh>
      {/* Closed (default): dusk-toned glass, no moonlight. Open: brighter,
          cooler moonlit glass — matches ticket 03/05's window behavior. */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[1.1, 1.3]} />
        <meshStandardMaterial
          color={open ? '#9fb2e0' : DUSK}
          emissive={open ? '#9fb2e0' : DUSK}
          emissiveIntensity={open ? 0.6 : 0.15}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.04, 1.3, 0.02]} />
        <meshStandardMaterial color={INK} />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.1, 0.04, 0.02]} />
        <meshStandardMaterial color={INK} />
      </mesh>
    </group>
  );
}

function CeilingLight({ on }: { on: boolean }) {
  return (
    <group position={[0, 4.85, -1]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 6]} />
        <meshStandardMaterial color={INK} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial
          color={on ? PAPER : SURFACE}
          emissive={on ? PAPER : '#000000'}
          emissiveIntensity={on ? 1.2 : 0}
          roughness={0.6}
          toneMapped={!on}
        />
      </mesh>
    </group>
  );
}

function LightSwitch({
  onInteract,
}: {
  onInteract: (action: AvatarAction) => void;
}) {
  return (
    <mesh
      position={[-2.97, 1.1, 1.8]}
      rotation={[0, Math.PI / 2, 0]}
      castShadow
      {...interactiveProps(onInteract, 'toggleLight')}
    >
      <boxGeometry args={[0.1, 0.14, 0.02]} />
      <meshStandardMaterial color={PAPER} roughness={0.7} />
    </mesh>
  );
}

export function RoomFurniture({
  windowOpen,
  roomLightOn,
  onInteract,
}: {
  windowOpen: boolean;
  roomLightOn: boolean;
  onInteract: (action: AvatarAction) => void;
}) {
  return (
    <group>
      <Desk />
      <Chair onInteract={onInteract} />
      <Bed onInteract={onInteract} />
      <Sofa />
      <Window open={windowOpen} onInteract={onInteract} />
      <CeilingLight on={roomLightOn} />
      <LightSwitch onInteract={onInteract} />
    </group>
  );
}
