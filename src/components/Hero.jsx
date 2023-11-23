"use client";
import { motion } from "framer-motion";
import { styles } from "../app/styles";
import { ComputersCanvas } from "./canvas";
import TypeIt from "typeit-react";
import { About, Experience } from ".";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto snapped`}>
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
  );
};

export default Hero;
