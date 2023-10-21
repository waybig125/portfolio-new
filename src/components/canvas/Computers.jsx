"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { extend } from "@react-three/fiber";
import { Model1 } from "../Computer";
import { Model2 } from "../Macbookpro";
import { Model3 } from "../Macbookpromodel";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// extend({ OrbitControls, Preload });
const Computers = () => {
 
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      {/* <premitive object={computer.scene} /> */}
      {/* <boxGeometry /> */}
    </mesh>
  );
};
const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])

  return (
    <>
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preventDrawingBuffer: true }}
      >
        <Suspense
        fallback={<CanvasLoader />}
        >
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model1 isMobile={isMobile} />
          <mesh>
            <hemisphereLight intensity={1.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            castShadow
            shadow-mapSize={1024}
            />
          </mesh>
          <Preload all />
        </Suspense>
      </Canvas>
    </>
  );
};
export default ComputersCanvas;
