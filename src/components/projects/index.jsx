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
      "The project was simple, I was asked to create a portfolio website for a newly established company called Business Wise Pro. The company was about Documents Clearing Services in Dubai. The owner wanted the website to be simple, minimalist, and as professional as possible. So, I developed the website using WordPress, Elementor & a bit of css. Altough, the website was easy to design, the main issue, I faced was finding the right stock footage for the website to compete with the competitor companies as I didn't had any graphics designer in Axisio by that time. So, the only option for me was to find stock footage that was right for the website. After, I designed the website, the next part was to do SEO of the webiste and create a business profile for the company on google & google maps, which (Alhamdulillah) I was successfull in completing.",
    website: "https://bwproservices.net/",
  },
  {
    i: "1",
    title: "Sereniti",
    description: `We developed the website & logo for Sereniti E-Shop`,
    speed: 0.6,
    screenshot: "../../screenshots/sereniti.png",
    about:
      "I was asked to complete a website for a jewellery e-store. Although, the website was started by the owner but due to lack of experience, the designing was awful. Moreover, she had installed a lot of plugins that were slowing down the website a lot. I designed the website locally on my laptop and after completing it, the next difficulty was waiting for me. The hosting, the owner had bought had limited capcities for uploading and related things. So, I had no choice but to ask the owner to update the hosting which she readily did. the next issue, I faced was importing the website and finding a suitable plugin for it. It took me 2-3 days to find the right plugin as (I said earlier), the website was full of plugins which were making it heavier in size. Finally, I was able to find the right plugin. The next thing , I was asked to do was to translate the website into Czech langugage , as I didn't know Czech language, I had to use Google Translate and a number of other tools to first translate the content and then to fully integrate that content, I had to study the wordpress and related plugins' source code from scratch and then finally, I was able to complete the task. Hence, I had completed the website.",
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
