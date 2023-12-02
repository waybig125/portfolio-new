"use client";
import { useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { styles } from "../app/styles";
import Projects from "@/components/projects";
import useMousePosition from "@/utils/useMousePosition";
import { useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
} from "framer-motion";
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
      <section className="pham inset-0 h-auto w-screen bg-[#000}">
        <h1
          className="items-center z-[3] gradient-heading my-[20px] text-center snapped h-[100vh] w-[100%] main"
          id="project_heading"
        >
          <motion.span>Our Projects</motion.span>
        </h1>
        <div
          className={`items-center main bg-black h-[100vh] w-screen`}
          style={{ scrollSnapAlign: "center !important" }}
        >
          <Earth />
          <Projects />
          <ParticleRing colorFromUser="white" />
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
