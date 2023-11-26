"use client";
import {
  // Box,
  Environment,
  // OrbitControls,
  Preload,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import { MacBookModel } from "./UpdatedScene";
// import { Model2 } from "./Macbookpro";

export default function LaptopModelCanvas() {
  return (
    <>
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4] }}
      >
        {/* <ambientLight intensity={1} /> */}
        {/* <directionalLight position={[0, 2, 1]} color="orange" /> */}
        {/* <OrbitControls /> */}
        {/* <Suspense fallback={<>Loading...</>}> */}
          {/* <Box args={[1, 1, 1]} material-color="yellow" /> */}
          <LaptopComp />
          {/* <Model3 /> */}
          {/* <MacBookModel /> */}
          {/* <Preload all /> */}
        {/* </Suspense> */}
      </Canvas>
    </>
  );
}

const LaptopComp = () => {
  const laptop = useGLTF("./model.gltf");
  return (
    <>
      <Environment preset={"warehouse"}>
        <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, -0.2]}>
          <primitive object={laptop.scene} />
        </PresentationControls>
      </Environment>
    </>
  );
};
