import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/sceneDraco.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={1.5}
      position-x={0}
      position-y={1.2}
      rotation-y={0}
    />
  );
};

const Controls = () => {
  const ref = useRef(null);
  useFrame(() => {
    // const angle = ref.current.getAzimuthalAngle();
    ref.current.autoRotateSpeed = 30;
  });
  return (
    <OrbitControls
      ref={ref}
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={`relative w-[100%] h-[100%] ${isMobile ? "" : "ml-[30vw]"}`}
    >
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <ambientLight instensity={30} color="#2dd4bf" />
        <directionalLight
          intensity={3.5}
          position={[1, 0, -0.25]}
          color={"#2dd4bf"}
        />
        <Suspense fallback={<></>}>
          <Controls />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
