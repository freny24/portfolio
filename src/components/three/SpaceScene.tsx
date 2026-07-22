"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import type { Group } from "three";
import { LegoAstronaut } from "./LegoAstronaut";
import { DataNodes } from "./DataNodes";
import { FloatingBricks } from "./FloatingBricks";

/** Group that eases toward the pointer for a subtle parallax feel. */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!ref.current) return;
    // ease toward target — spring-like, never jerky
    ref.current.rotation.y +=
      (pointer.x * 0.35 - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x +=
      (-pointer.y * 0.2 - ref.current.rotation.x) * 0.04;
  });

  return <group ref={ref}>{children}</group>;
}

export default function SpaceScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.5, 8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
      aria-hidden="true"
    >
      <PerformanceMonitor />
      <AdaptiveDpr pixelated />

      {/* Lighting */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} castShadow />
      <pointLight position={[-6, -2, 2]} intensity={40} color="#6d5ef0" />
      <pointLight position={[6, 3, 3]} intensity={30} color="#38e1ff" />

      <Suspense fallback={null}>
        <Stars
          radius={90}
          depth={50}
          count={2600}
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />

        <ParallaxRig>
          {/* Data planet on the left */}
          <group position={[-3.2, 0.2, -1]} scale={0.85}>
            <DataNodes />
          </group>

          {/* Astronaut on the right, gently floating */}
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
            <group position={[2.6, -0.3, 0.5]}>
              <LegoAstronaut />
            </group>
          </Float>

          <FloatingBricks count={22} />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
