"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import * as THREE from "three";

/**
 * A planet with orbiting "data nodes" connected like an ML graph.
 * Represents the data-viz / ML side of the LEGO NASA lab theme.
 */
export function DataNodes() {
  const orbitRef = useRef<Group>(null);
  const NODES = 7;

  const nodes = useMemo(() => {
    return Array.from({ length: NODES }, (_, i) => {
      const angle = (i / NODES) * Math.PI * 2;
      const radius = 2.6 + (i % 2) * 0.5;
      const y = Math.sin(angle * 2) * 0.6;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
    });
  }, []);

  // Build connective lines (constellation graph) between consecutive nodes.
  const linePositions = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const b = nodes[(i + 1) % nodes.length];
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
    return new Float32Array(pts);
  }, [nodes]);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group ref={orbitRef} position={[0, 0, 0]}>
      {/* Central planet */}
      <mesh>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshStandardMaterial
          color="#6d5ef0"
          roughness={0.5}
          metalness={0.2}
          emissive="#2a1f6b"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2.1, 0, 0]}>
        <torusGeometry args={[2.9, 0.02, 12, 120]} />
        <meshStandardMaterial
          color="#38e1ff"
          emissive="#38e1ff"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Constellation connective lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#38e1ff" transparent opacity={0.25} />
      </lineSegments>

      {/* Data nodes */}
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 ? "#38e1ff" : "#ffcf00"}
            emissive={i % 2 ? "#38e1ff" : "#ffcf00"}
            emissiveIntensity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}
