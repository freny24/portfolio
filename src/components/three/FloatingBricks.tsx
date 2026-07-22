"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { InstancedMesh } from "three";
import * as THREE from "three";

const COLORS = ["#e3350d", "#ffcf00", "#0d69b4", "#00af4d", "#8b5cf6", "#38e1ff"];

/** Tiny LEGO bricks drifting through space (instanced for performance). */
export function FloatingBricks({ count = 26 }: { count?: number }) {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 - 3
        ),
        speed: 0.2 + Math.random() * 0.5,
        rot: Math.random() * Math.PI,
        scale: 0.12 + Math.random() * 0.18,
      })),
    [count]
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((s, i) => {
      dummy.position.set(
        s.pos.x + Math.sin(t * s.speed + i) * 0.4,
        s.pos.y + Math.cos(t * s.speed * 0.8 + i) * 0.4,
        s.pos.z
      );
      dummy.rotation.set(t * s.speed * 0.5, t * s.speed + s.rot, s.rot);
      dummy.scale.setScalar(s.scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial
        vertexColors={false}
        color={COLORS[0]}
        roughness={0.4}
        metalness={0.1}
      />
    </instancedMesh>
  );
}
