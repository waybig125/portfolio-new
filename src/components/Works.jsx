"use client";
import { useRef, Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { styles } from "../app/styles";
import Projects from "@/components/projects";
import { Contact } from "@/components";
import useMousePosition from "@/utils/useMousePosition";
import dynamic from "next/dynamic";
import ParticleRing from "./Particles";

const Works = () => {
  const { x, y } = useMousePosition();

  // const size = isHovered ? 400 : 40;
  // const headingRef = useRef(null);

  // const isInView = useInView(headingRef);
  // const mainControls = useAnimation({ once: true });

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView, mainControls]);

  return (
    <>
      <section className="pham inset-0 h-auto w-screen bg-transparent">
        <h1
          className="items-center bg-transparent z-[3] my-[20px] text-center snapped h-[100vh] w-[100%] main"
          id="project_heading"
        >
          <a href="#projects" className={`gradient-heading`}>
            Our Projects
          </a>
        </h1>
        <a
          className={`items-center main bg-black h-[100vh] w-screen`}
          style={{ scrollSnapAlign: "center !important" }}
          id="projects"
          name="projects"
        >
          <Earth />
          <Suspense fallback={"Loading..."}>
            <Projects />
          </Suspense>
          <ParticleRing colorFromUser="white" />
        </a>
        <div
          className={`items-center snapped bg-transparent h-[100vh] w-screen`}
        >
          <Suspense fallback={"Loading..."}>
            <Contact />
          </Suspense>
        </div>
      </section>
    </>
  );
};

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => <></>,
});

export default Works;
