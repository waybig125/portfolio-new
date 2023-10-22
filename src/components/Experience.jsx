"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../app/styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motions";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./Li";

const Details = ({ position, company, website, work }) => {
  const ref = useRef(null);
  return (
    <li
    ref={ref}
      className={`my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between`}
    >
      <LiIcon reference={ref} />
      <div>
        <h3 className={`capitalize text-bold font-2xl`}>
          {position} <a href={`${website}`}>@{company}</a>
        </h3>
        <span className={`capitalize font-medium text-dark/75`}>
          <a target="_blank" className={`text-primary capitalize`} href={`${website}`}>{website}</a>
        </span>
        <p className={`font-medium w-full`}>
          <ul>
            {work.map((job) => (
              <li key={`${new Date()}_${job.slice(1, 20)}`}>{job}</li>
            ))}
          </ul>
        </p>
      </div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })
  return (
    <>
      <motion.div variants={() => textVariant()}>
        <p className={styles.sectionSubText}>Work Experieces</p>
        <h2 className={styles.sectionHeadText}>What I Have Done?</h2>
      </motion.div>
      <div className={`w-[75%] mx-auto relative mt-[10px]`} ref={ref}>
        <div
          className={`left-9 absolute top-3 w-[4px] h-full bg-white origin-top`}
          style={{ scaleY: scrollYProgress }}
        />
        <ul className={`w-full flex flex-col items-start justify-between ml-4`}>
          {experiences.map((experience, index) => {
            return (
              <Details
                position={experience.title}
                key={index}
                company={experience.company_name}
                work={experience.points}
                website={
                  experience.website != "undefined" && experience.website
                }
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
