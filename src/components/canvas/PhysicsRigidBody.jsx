"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Sphere, Box, OrbitControls } from "@react-three/drei";
export default function PhysicsRigid() {
  return (
    <>
      <Canvas
        className={`bg-black z-[9999] h-[100vh] w-[100%] block`}
        shadows
        camera={{ position: [0, 0, 3], fov: 160 }}
      >
        <Suspense>
          <Physics debug>
            <RigidBodyComp />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}
function RigidBodyComp() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, -10, 0]} intensity={0.4} />
      <OrbitControls />
      <RigidBody position={[2, 100, 0]} colliders={"ball"} restitution={2}>
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      </RigidBody>
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="blue" />
        </Box>
      </RigidBody>
    </>
  );
}
