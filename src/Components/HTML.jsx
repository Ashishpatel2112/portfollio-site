import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function TexturedBall() {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, "/textures/HTML.avif"); // custom image path
  useEffect(() => {
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1); // Show only once, no repeat
  }, [texture]);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // 🔁 Continuous rotation
    }
  });
  return (
    <mesh ref={meshRef} rotation={[1, 4.7, 0.7]}>
      <sphereGeometry args={[2, 100, 100]} />
      <meshStandardMaterial map={texture} metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function HTMl() {
  return (
    <div
      className=" h-[150px] w-[150px]"
      style={{
        filter: "drop-shadow(0px 1px 15px rgb(219,143,63)) brightness(1.5)",
      }}
    >
      <Canvas>
        <ambientLight intensity={5} />
        <pointLight position={[1, 1, 1]} />
        <Suspense fallback={null}>
          <TexturedBall />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
