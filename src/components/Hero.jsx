"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion, useTransform, useScroll } from "framer-motion";
import { styles } from "../app/styles";
import Projects from "@/components/projects";
// import { ComputersCanvas } from "./canvas";
// import TypeIt from "typeit-react";
import { About, Experience } from ".";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Hero = () => {
  const targetRef = useRef();
  const headingRef = useRef();

  const headingProgress = useScroll({
    target: headingRef,
  });

  const rotation = useTransform(
    headingProgress.scrollYProgress,
    [0, 1],
    ["180deg", "0deg"],
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["0deg", "0deg", "90deg"],
  );

  return (
    <>
      <section
        className={`relative w-full h-screen mx-auto snapped pt-[100px]`}
      >
        <div
          className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className={`flex flex-col justify-center items-center mt-5`}>
            <div className={`w-5 h-5 rounded-full bg-[#2dd4bf]`} />
            <div className={`w-1 sm:h-80 h-40 violet-gradient`} />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} gradient-heading`}>
              We are <span className={`text-[#2dd4bf]`}>Axisio</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Team Of Expert Web Developers
            </p>
          </div>
        </div>
        {/* <ComputersCanvas /> */}
        {/* <About /> */}
        {/* <Experience /> */}
      </section>
      <section
        className={`snapped imp-800vh`}
        id="animated"
        style={{ "scroll-snap-type": "none" }}
      >
        <div className="sticky top-0 h-screen">
          <Trippy rotate={rotate} />
        </div>
      </section>
      <section className="pham inset-0 h-screen w-screen">
        <h1
          className="items-center gradient-heading my-[20px] text-center snapped h-[100%] w-[100%] main"
          id="project_heading"
          ref={headingRef}
        >
          <motion.span className={``} style={{ rotation }}>
            Our Projects
          </motion.span>
        </h1>
        <div className={`main bg-black h-screen w-screen snapped`}>
          <Earth />
          <Projects />
        </div>
      </section>
    </>
  );
};

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" alt="placeholder" />,
});

const NUM_SECTIONS = 100;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = ({ count, color, rotate }) => {
  if (count >= NUM_SECTIONS) {
    return <></>;
  }
  const nextColor = color === "black" ? "#2dd4bf" : "black";
  let newCount = count + 1;
  return (
    <SectionComp rotate={rotate} background={color}>
      {generateSections({ count: newCount, color: nextColor, rotate: rotate })}
    </SectionComp>
  );
};

const Trippy = ({ rotate }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections({ count: 0, color: "black", rotate: rotate })}
    </div>
  );
};

const SectionComp = ({ children, background, rotate }) => {
  return (
    <motion.div
      className={`relative w-full h-full origin-center`}
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
