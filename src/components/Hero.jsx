"use client";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../app/styles";
import { textVariant } from "@/utils/motions";
import useMousePosition from "@/utils/useMousePosition";
import { useRef } from "react";

const Hero = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    ["0deg", "0deg", "90deg"],
  );

  return (
    <>
      <section
        className={`relative w-full h-[40vh] mx-auto snapped pt-[100px]`}
      >
        <motion.div
          className="rounded-full fixed z-[1] bg-[#000] h-[40px] w-[40px]"
          id="cursor-mouse"
          style={{
            left: x - 20,
            top: y - 20,
            boxShadow: "-10px -50px 20px #2dd4bf",
          }}
        ></motion.div>
        <div
          className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className={`flex flex-col justify-center items-center mt-5`}>
            <div className={`w-5 h-5 rounded-full bg-[#2dd4bf]`} />
            <div className={`w-1 sm:h-80 h-40 violet-gradient`} />
          </div>
          <div className="z-[3]">
            <motion.h1
              className={`${styles.heroHeadText} gradient-heading`}
              variants={() => textVariant(1)}
              initial="hidden"
              animate="show"
              transition="transition"
            >
              We are <span className={`text-[#2dd4bf]`}>Axisio</span>
            </motion.h1>
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
        style={{ scrollSnapType: "none" }}
      >
        <div className="sticky top-0 h-screen z-[3]">
          <Trippy rotate={rotate} countNum={1} />
        </div>
      </section>
    </>
  );
};

const NUM_SECTIONS = 100;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = ({ count, color, rotate, countNum }) => {
  if (count >= NUM_SECTIONS) {
    return <></>;
  }
  let nextColor = color === "black" ? "#2dd4bf" : "black";
  let nextCountNum = countNum + 1;
  nextColor = nextCountNum % 6 == 0 ? "white" : nextColor;
  let newCount = count + 1;
  return (
    <SectionComp rotate={rotate} background={color}>
      {generateSections({
        count: newCount,
        countNum: nextCountNum,
        color: nextColor,
        rotate: rotate,
      })}
    </SectionComp>
  );
};

const Trippy = ({ rotate, countNum }) => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections({
        count: 0,
        color: "black",
        countNum: countNum,
        rotate: rotate,
      })}
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
