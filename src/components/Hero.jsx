"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { styles } from "../app/styles";
// import { ComputersCanvas } from "./canvas";
// import TypeIt from "typeit-react";
import { About, Experience } from ".";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

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
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className={`text-[#2dd4bf]`}>M.Areeb</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Web Developer
            </p>
          </div>
        </div>
        {/* <ComputersCanvas /> */}
        {/* <About /> */}
        {/* <Experience /> */}
      </section>
      <section className={`snapped imp-800vh`}>
        <div className="sticky top-0 h-screen">
          <Trippy rotate={rotate} />
        </div>
      </section>
    </>
  );
};

const Trippy = ({ rotate }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <SectionComp rotate={rotate} background={`white`}>
        <SectionComp rotate={rotate} background={`black`}>
          <SectionComp rotate={rotate} background={`white`}></SectionComp>
        </SectionComp>
      </SectionComp>
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
        padding: "5vw",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
