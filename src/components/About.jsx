"use client";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "@/app/styles";
// import { services } from "@/constants";
// import { fadeIn, textVariant } from "../utils/motions";
// import SectionWrapper from "@/hoc/SectionWrapper";
// import ServiceCard from "./ServiceCard";

import styles from "./about.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <section className={`snapped`}>
      {/* <motion.div variants={() => textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Meet Me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        classsName={`md-4 text-secondary text-[17px] max-w-3l leading-[30px]`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        quaerat facere nam, sunt dolore incidunt sequi! Pariatur placeat libero
        voluptatem aliquid maxime, tempora necessitatibus neque provident
        ratione in, aperiam deserunt.
      </motion.p>
      <div className={`mt-20 flex flex-wrap gap-10`}>
        {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            A visual designer - with skills that haven't been replaced by A.I
            (yet) - making good shit only if the paycheck is equally good.
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            I'm a <span>selectively skilled</span> product designer with strong
            focus on producing high quality & impactful digital experience.
          </p>
        </div>
      </main>
    </section>
  );
};

export default SectionWrapper(About, "about");
