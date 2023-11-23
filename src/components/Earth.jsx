"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";

export default function earth() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  /* Used for smooth rotation if you're not using Lenis Scroll */
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
      <ambientLight intensity={0.2} color={"#2dd4bf"} />
      <directionalLight
        intensity={3.5}
        position={[1, 0, -0.25]}
        color={"#2dd4bf"}
      />
      <MeshComp
        smoothRotation={smoothRotation}
        color={color}
        normal={normal}
        aoMap={aoMap}
      />
    </Canvas>
  );
}
const MeshComp = ({ smoothRotation, color, normal, aoMap }) => {
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  const ref = useRef(null);
  return (
    <motion.mesh scale={1.7} rotation-y={smoothRotation}>
      <sphereGeometry args={[1, 64, 64]} ref={ref} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </motion.mesh>
  );
};
