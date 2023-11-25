import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import useMousePosition from "@/utils/useMousePosition";

export default function Descriptions({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  const { x, y } = useMousePosition();

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallDevice(window.innerWidth < 600); // Adjust the threshold as needed
    };

    // Check window size on component mount
    checkWindowSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description, screenshot } = project;
        const visibleCriteria = {
          display: selectedProject == i ? "flex" : "none",
        };
        const deviceCriteria = !isSmallDevice
          ? { left: x ? x * 0.3 : 10 }
          : { left: 0 };
        const deviceCriteria2 = !isSmallDevice
          ? { right: x ? x * 0.3 : 10 }
          : { right: 0 };

        return (
          <div key={i + "!"}>
            <div
              key={i}
              className={styles.description}
              style={{
                clipPath:
                  selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
              }}
            >
              <p>{crop(title, 9)}</p>
              {/* <p>{description}</p> */}
            </div>
            <p
              key={i + "1"}
              style={{
                ...visibleCriteria,
                ...deviceCriteria,
              }}
              className="z-[3] customBox rounded-xl bg-[#000] mx-[10px]"
            >
              {description}
            </p>
            <p
              key={i + "2"}
              style={{
                ...visibleCriteria,
                ...deviceCriteria2,
              }}
              className="z-[3] customImgBox rounded-xl bg-[#000] mx-[10px]"
            >
              <img
                src={screenshot}
                alt={title}
                className={"customImgBoxImg rounded-xl"}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
