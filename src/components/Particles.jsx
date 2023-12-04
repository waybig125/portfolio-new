import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/utils/utils";
import useMousePosition from "@/utils/useMousePosition";

const ParticleRing = ({ colorFromUser }) => {
  return (
    <div
      className={`absolute bg-transparent w-[100%] h-[100vh] ${
        colorFromUser == "black" && "z-[-1]"
      }`}
    >
      <Canvas
        camera={{
          position: [0, 0, 20],
        }}
        style={{ height: "100vh" }}
        className="bg-transparent"
      >
        {/* <OrbitControls maxDistance={20} minDistance={10} /> */}
        <directionalLight color={colorFromUser} />
        <pointLight
          color={colorFromUser}
          position={[-30, 0, -30]}
          power={10.0}
        />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const { x, y } = useMousePosition();
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  //   useFrame(({ clock }) => {
  //     if (ref.current?.rotation) {
  //       //   ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  //     }
  //   });

  return (
    <group ref={ref} rotation-y={y * 0.01} rotation-x={x * 0.01}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Box position={position} args={[1, 1, 1]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Box>
  );
};

export default ParticleRing;
