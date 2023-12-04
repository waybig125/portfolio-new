"use client";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "@/app/styles";
// import { services } from "@/constants";
// import { fadeIn, textVariant } from "../utils/motions";
// import SectionWrapper from "@/hoc/SectionWrapper";
// import ServiceCard from "./ServiceCard";

import styles from "./about.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent,
      );

    if (isMobileDevice) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <section
      className={`h-[100vh] relative snapped z-[3]`}
      style={{
        scrollSnapStop: "always",
      }}
    >
      <main className={`${styles.main} h-[100%] pham-text`}>
        <motion.div
          className={`h-[100%] ${styles.mask}`}
          animate={
            !isMobile && {
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }
          }
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              if (!isMobile) {
                setIsHovered(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setIsHovered(false);
              }
            }}
          >
            We are a team — struggling with disjointed efforts, our web
            developers often face technical hurdles, while our social media
            marketers grapple with engagement issues. Our SEO experts&apos;
            strategies often fall short, leading to diminished online
            visibility. Despite efforts, innovation remains stagnant, hindering
            our ability to redefine digital success.
          </p>
        </motion.div>

        <div className={`h-[100%] pham-mask ${styles.body}`}>
          <p>
            We are a stellar team — a synergy of{" "}
            <span>web development virtuosos</span>,{" "}
            <span>social media mavens</span>, and <span>SEO wizards</span>. With
            our expertise and dedication, we breathe life into digital
            aspirations, weaving captivating online journeys. Our passion for{" "}
            <span>innovation</span> and relentless pursuit of excellence form
            the cornerstone of our success, delivering tailored solutions that
            redefine the <span>digital landscape</span>.
          </p>
        </div>
      </main>
    </section>
  );
};

// export default SectionWrapper(About, "about");
export default About;
