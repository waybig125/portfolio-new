"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    title: "BW Pro",
    description: `We developed the website for Business Wise Pro Documents Clearing Services L.L.C inc.`,
    speed: 0.5,
  },
  {
    title: "Sereniti",
    description: `We developed the website & logo for Sereniti E-Shop`,
    speed: 0.6,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}