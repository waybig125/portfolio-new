"use client";
import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function Titles({
  data,
  setSelectedProject,
  setClickedProject,
}) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
            setClickedProject={setClickedProject}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject, setClickedProject }) {
  const { title, speed, i } = data;
  const [readMoreText, setReadMoreText] = useState(false);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className={`z-[3] ${styles.title}`}>
      <div
        className={styles.wrapper}
        onClick={() => setClickedProject(i)}
        onMouseOver={() => {
          setSelectedProject(i);
          setReadMoreText(true);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
          setReadMoreText(false);
        }}
      >
        <motion.p style={{ clipPath: clip }}>
          {!readMoreText ? title : "read more"}
        </motion.p>
        <p className="z-[3]">{!readMoreText ? title : "read more"}</p>
      </div>
    </div>
  );
}
