"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./Loader";
import useMousePosition from "@/utils/useMousePosition";

export default function Earth() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent,
      );

    if (isMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const { x, y } = useMousePosition();
  const colorCode = y * 0.01;
  console.log(colorCode);
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });
  const smoothRotation = useSpring(scrollYProgress, {
    damping: 20,
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpeg",
    "/assets/normal.png",
    "/assets/occlusion.jpeg",
  ]);

  return (
    <Canvas ref={scene}>
      <ambientLight
        intensity={colorCode && !isMobile ? colorCode : 0.2}
        color={"#2dd4bf"}
      />
      <directionalLight
        intensity={3.5}
        position={[1, 0, -0.25]}
        color={"#2dd4bf"}
      />
      <Suspense fallback={<CanvasLoader />}>
        <MeshComp
          smoothRotation={smoothRotation}
          color={color}
          normal={normal}
          aoMap={aoMap}
        />
        <Preload all />
      </Suspense>
      <OrbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
const MeshComp = ({ smoothRotation, color, normal, aoMap }) => {
  const ref = useRef(null);
  return (
    <motion.mesh scale={1.7} rotation-y={smoothRotation}>
      <sphereGeometry args={[1, 64, 64]} ref={ref} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </motion.mesh>
  );
};
