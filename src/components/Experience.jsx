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

const Details = ({ position, company, website, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position} <a href={`${website}`}>@{company}</a>
        </h3>
        <span>
          <a href={`${website}`}>{website}</a>
        </span>
        <p>
          <ul>
            {work.map((job) => <li key={`${new Date}_${job.slice(1, 20)}`}>{job}</li>)}
          </ul>  
        </p>
      </div>
    </li>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={() => textVariant()}>
        <p className={styles.sectionSubText}>Work Experieces</p>
        <h2 className={styles.sectionHeadText}>What I Have Done?</h2>
      </motion.div>
      <div className={`w-[75%] mx-auto relative`}>
        <ul>
          {experiences.map((experience, index) => {
            return (
              <Details
                position={experience.title}
                key={index}
                company={experience.company_name}
                work={experience.points}
                website={(experience.website) != "undefined" && experience.website}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
