"use client";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "../utils/motions";
import SectionWrapper from "@/hoc/SectionWrapper";
import ServiceCard from "./ServiceCard";

const About = () => {
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
    </section>
  );
};

export default SectionWrapper(About, "about");
