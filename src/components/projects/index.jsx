"use client";
import { useState, Suspense } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    i: "0",
    title: "BW Pro",
    description: `We developed the website for Business Wise Pro Documents Clearing Services L.L.C inc.`,
    speed: 0.5,
    screenshot: "../../screenshots/bw.png",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?",
    website: "https://bwproservices.net/",
  },
  {
    i: "1",
    title: "Sereniti",
    description: `We developed the website & logo for Sereniti E-Shop`,
    speed: 0.6,
    screenshot: "../../screenshots/sereniti.png",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas sunt vero inventore atque facere maxime aut non fugit nostrum voluptatem aperiam nobis mollitia iste libero dolorem ratione, quaerat corrupti?",
    website: "https://sereniti.cz",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickedProject, setClickedProject] = useState(10);
  return (
    <div className={`${styles.container} z-[3]`}>
      <Titles
        data={data}
        setSelectedProject={setSelectedProject}
        setClickedProject={setClickedProject}
      />
      <Suspense fallback={"Loading..."}>
        <Descriptions
          data={data}
          selectedProject={selectedProject}
          setClickedProject={setClickedProject}
          clickedProject={clickedProject}
        />
      </Suspense>
    </div>
  );
}
