import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/utils/utils2";
// import useMousePosition from "@/utils/useMousePosition";

const PointsRing = ({ colorFromUser }) => {
  return (
    <div className="absolute bg-transparent w-[100%] h-[100vh]">
      <Canvas
        camera={{
          position: [0, 0, 30],
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
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 5;
    ref.current.rotation.y -= delta / 10;
  });

  //   useFrame(({ clock }) => {
  //     if (ref.current?.rotation) {
  //       //   ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  //     }
  //   });

  return (
    <group ref={ref}>
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
    <Sphere position={position} args={[1, 64, 64]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0}
        color={color}
      />
    </Sphere>
  );
};

export default PointsRing;
