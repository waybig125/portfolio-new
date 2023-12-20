"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import useMousePosition from "@/utils/useMousePosition";

const Stars = (props) => {
  const { x, y } = useMousePosition();
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.4 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  // Math.PI / 4

  const z = x ? ((x * 0.001 * Math.PI) / 4 + (y * 0.001 * Math.PI) / 4) / 2 : 0;

  return (
    <group rotation={[x ? x * 0.06 : 0, y ? y * 0.06 : 0, z]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="green"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-[100vh] fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
