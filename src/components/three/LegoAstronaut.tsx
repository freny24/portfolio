"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

/** A single LEGO stud (the little cylinder on top of a brick). */
function Stud({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} castShadow>
      <cylinderGeometry args={[0.12, 0.12, 0.08, 20]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.1} />
    </mesh>
  );
}

/** A LEGO brick: a rounded box topped with a grid of studs. */
function Brick({
  position = [0, 0, 0],
  size = [1, 0.5, 1],
  color = "#ffcf00",
  studs = [2, 2],
}: {
  position?: [number, number, number];
  size?: [number, number, number];
  color?: string;
  studs?: [number, number];
}) {
  const [w, h, d] = size;
  const [sx, sz] = studs;
  const studYtop = position[1] + h / 2 + 0.04;
  const items: JSX.Element[] = [];
  for (let i = 0; i < sx; i++) {
    for (let j = 0; j < sz; j++) {
      const x = position[0] + (i - (sx - 1) / 2) * (w / sx);
      const z = position[2] + (j - (sz - 1) / 2) * (d / sz);
      items.push(
        <Stud key={`${i}-${j}`} position={[x, studYtop, z]} color={color} />
      );
    }
  }
  return (
    <group>
      <mesh position={position} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.08} />
      </mesh>
      {items}
    </group>
  );
}

/**
 * A minifigure-style LEGO astronaut, assembled from primitives.
 * Gently bobs and rotates. No external model files required.
 */
export function LegoAstronaut() {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.25) * 0.5;
    ref.current.position.y = Math.sin(t * 0.8) * 0.15;
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.04;
  });

  return (
    <group ref={ref} scale={0.9} rotation={[0.1, 0.4, 0]}>
      {/* Head */}
      <mesh position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.5, 28]} />
        <meshStandardMaterial color="#ffcf00" roughness={0.35} />
      </mesh>
      {/* Helmet visor */}
      <mesh position={[0, 1.55, 0.02]}>
        <sphereGeometry args={[0.44, 32, 32]} />
        <meshPhysicalMaterial
          color="#0a1030"
          roughness={0.05}
          metalness={0.2}
          transmission={0.6}
          transparent
          opacity={0.55}
          clearcoat={1}
        />
      </mesh>
      {/* Neck stud */}
      <Stud position={[0, 1.83, 0]} color="#ffcf00" />

      {/* Torso */}
      <Brick position={[0, 0.95, 0]} size={[0.95, 0.7, 0.55]} color="#e3350d" studs={[2, 1]} />
      {/* Chest control panel */}
      <mesh position={[0, 1.0, 0.31]}>
        <boxGeometry args={[0.4, 0.28, 0.04]} />
        <meshStandardMaterial color="#38e1ff" emissive="#38e1ff" emissiveIntensity={0.6} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.62, 0.98, 0]} rotation={[0, 0, 0.35]} castShadow>
        <boxGeometry args={[0.22, 0.6, 0.24]} />
        <meshStandardMaterial color="#0d69b4" roughness={0.4} />
      </mesh>
      <mesh position={[0.62, 0.98, 0]} rotation={[0, 0, -0.35]} castShadow>
        <boxGeometry args={[0.22, 0.6, 0.24]} />
        <meshStandardMaterial color="#0d69b4" roughness={0.4} />
      </mesh>
      {/* Hands */}
      <mesh position={[-0.78, 0.66, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 16]} />
        <meshStandardMaterial color="#ffcf00" />
      </mesh>
      <mesh position={[0.78, 0.66, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 16]} />
        <meshStandardMaterial color="#ffcf00" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.24, 0.28, 0]} castShadow>
        <boxGeometry args={[0.34, 0.6, 0.5]} />
        <meshStandardMaterial color="#0e1430" roughness={0.5} />
      </mesh>
      <mesh position={[0.24, 0.28, 0]} castShadow>
        <boxGeometry args={[0.34, 0.6, 0.5]} />
        <meshStandardMaterial color="#0e1430" roughness={0.5} />
      </mesh>

      {/* Oxygen backpack */}
      <Brick position={[0, 1.0, -0.42]} size={[0.6, 0.7, 0.3]} color="#8b5cf6" studs={[2, 1]} />
    </group>
  );
}
