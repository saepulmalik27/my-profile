import { AMBER, CYAN, DUSK, INK, PAPER, SURFACE } from './theme';

// Block-out geometry for the room (ticket 02: low-poly stand-ins now,
// swapped for real Kenney/Quaternius CC0 models later — layout/position
// code here shouldn't need to change when that happens). No interactivity
// yet — that's ticket 05's job, done as a follow-up implementation pass.

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

function Chair() {
  return (
    <group position={[1.1, 0, -1.7]}>
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

function Bed() {
  return (
    <group position={[-2.55, 0, 0.4]}>
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

function Window() {
  return (
    <group position={[2.1, 1.9, -2.97]}>
      <mesh castShadow>
        <boxGeometry args={[1.3, 1.5, 0.08]} />
        <meshStandardMaterial color={INK} roughness={0.8} />
      </mesh>
      {/* Closed by default (ticket 05) — dusk-toned glass, no moonlight yet */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[1.1, 1.3]} />
        <meshStandardMaterial
          color={DUSK}
          emissive={DUSK}
          emissiveIntensity={0.15}
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

function CeilingLight() {
  return (
    <group position={[0, 4.85, -1]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 6]} />
        <meshStandardMaterial color={INK} />
      </mesh>
      {/* Off by default (ticket 05) — no emissive until toggled on */}
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color={SURFACE} roughness={0.6} />
      </mesh>
    </group>
  );
}

export function RoomFurniture() {
  return (
    <group>
      <Desk />
      <Chair />
      <Bed />
      <Sofa />
      <Window />
      <CeilingLight />
    </group>
  );
}
