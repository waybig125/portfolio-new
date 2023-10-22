"use client"
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
      target: reference,
      offset: ["center end", "center center"],
    });
    return (
      <figure className={`absolute left-0 stroke-white`}>
        <svg fill="white" className={`-rotate-90`} width={`75`} height={`75`} viewBox={`0 0 100 100`}>
          <circle cx={`785`} cy={`50`} r={`20`} className={`stroke-primary stroke-1 fill-none`} />
          <motion.circle style={{pathLength: scrollYProgress}} cx={`785`} cy={`50`} r={`20`} className={`stroke-[5px] fill-light`} />
          <circle cx={`785`} cy={`50`} r={`20`} className={`animate-pulse stroke-1 fill-primary`} />
        </svg>
      </figure>
    );
}
 
export default dynamic (() => Promise.resolve(LiIcon), {ssr: false});