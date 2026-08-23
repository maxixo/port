"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const TINT = new THREE.Color("#8fa2ff");
const DESKTOP_COUNT = 900;
const MOBILE_COUNT = 350;

function makeGlowTexture(): THREE.Texture | null {
  if (typeof document === "undefined") return null;
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(255,255,255,0.55)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  // Base positions + per-particle drift phase
  const { positions, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, [count]);

  const target = useRef({ x: 0, y: 0 });
  const glow = useMemo(() => makeGlowTexture(), []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Camera parallax: lerp toward mouse offset
    camera.position.x += (target.current.x * 0.9 - camera.position.x) * 0.03;
    camera.position.y += (target.current.y * 0.6 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);

    // Gentle per-particle sine drift
    const attr = pointsRef.current?.geometry.getAttribute("position");
    if (attr) {
      const arr = attr.array as Float32Array;
      for (let i = 0; i < count; i++) {
        arr[i * 3 + 1] += Math.sin(t * 0.4 + phases[i]) * 0.0016;
        arr[i * 3] += Math.cos(t * 0.3 + phases[i]) * 0.0011;
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color={TINT}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={glow}
      />
    </points>
  );
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl") || c.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function ParticleBackground() {
  const [enabled, setEnabled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !hasWebGL()) return;
    setEnabled(true);
    setHidden(document.hidden);

    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!enabled) {
    // Static gradient fallback (also covers prefers-reduced-motion)
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(143,162,255,0.08), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(167,139,250,0.06), transparent 55%)",
        }}
      />
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        frameloop={hidden ? "never" : "always"}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ pointerEvents: "none" }}
      >
        <ParticleField
          count={
            typeof window !== "undefined" && window.innerWidth < 768
              ? MOBILE_COUNT
              : DESKTOP_COUNT
          }
        />
      </Canvas>
    </div>
  );
}
