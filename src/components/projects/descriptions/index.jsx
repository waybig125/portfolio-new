import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import useMousePosition from "@/utils/useMousePosition";
// import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from "@/utils/fontawesome";
import ParticleRing from "@/components/Particles";

export default function Descriptions({
  data,
  selectedProject,
  clickedProject,
  setClickedProject,
}) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  const { x, y } = useMousePosition();

  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isSecondScreen, setIsSecondScreen] = useState(false);

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
        const { title, description, screenshot, about, website } = project;
        const visibleCriteria = {
          display: selectedProject == i ? "flex" : "none",
        };
        const visibleClickedCriteria = {
          display: clickedProject == i ? "flex" : "none",
        };
        const visibleClickedCriteria2 = {
          display: clickedProject == i ? "block" : "none",
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

            <div
              className="fixed pointer-events-auto text-white z-[99999] top-[0] left-[0] bg-black h-[100vh] w-[100%] text-center items-center"
              style={visibleClickedCriteria}
            >
              {!isSecondScreen && (
                <div
                  className="items-center text-center"
                  style={{ alignItems: "center" }}
                >
                  <div
                    className={
                      "h-[300px] fixed w-[15px] z-[9999] rounded-full text-[#2dd4bf] bg-black boxes top-[20px] p-[5px] left-[5px]"
                    }
                    onClick={() => setClickedProject(10)}
                  >
                    <div
                      className="fixed top-[20px] left-[10px] h-[20px] bg-black pointer-events-auto z-[9999] p-[5px] text-sm w-[20px] rounded-full text-[#2dd4bf] boxes animateBoxes"
                      style={visibleClickedCriteria2}
                      title="Close"
                    >
                      <FontAwesomeIcon
                        title="Close"
                        icon="xmark"
                        onClick={() => setClickedProject(10)}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      "h-[300px] w-[15px] rounded-full text-[#2dd4bf] bg-black fixed boxes top-[20px] p-[5px] right-[5px]"
                    }
                    onClick={() => setIsSecondScreen(true)}
                  >
                    <div
                      title="Read More"
                      className="h-[20px] p-[5px] text-sm w-[20px] rounded-full text-[#2dd4bf] bg-black fixed boxes animateBoxes top-[20px] right-[10px]"
                    >
                      <FontAwesomeIcon
                        title="Read More"
                        icon="anchor"
                        onClick={() => setIsSecondScreen(true)}
                      />
                    </div>
                  </div>
                  <iframe
                    src={website}
                    frameBorder="0"
                    className="frame z-[9999]"
                    loading="lazy"
                  ></iframe>
                </div>
              )}

              {isSecondScreen && (
                <div className="fixed text-white z-[99999] bg-black h-[100vh] w-[100%]">
                  <div className={`z-[-1]`}>
                    <ParticleRing colorFromUser="black" />
                  </div>
                  <h1 className="text-[#2dd4bf] text-4xl about-heading-mobile uppercase mt-[100px] mb-[-40px]">
                    Project Details
                  </h1>
                  <p className="mt-[100px] text-md text-white rounded-xl paragraph-about">
                    {about}
                  </p>
                  <div
                    className={
                      "h-[300px] w-[15px] rounded-full text-[#2dd4bf] bg-black fixed boxes top-[20px] p-[5px] left-[5px]"
                    }
                    onClick={() => setIsSecondScreen(false)}
                  >
                    <div
                      title="Close"
                      className="h-[20px] p-[5px] z-[10000] text-sm w-[20px] rounded-full text-[#2dd4bf] bg-black fixed boxes animateBoxes top-[20px] left-[10px]"
                    >
                      <FontAwesomeIcon
                        title="Close"
                        icon="xmark"
                        onClick={() => setIsSecondScreen(false)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {/*  */}
      {/*  */}
    </div>
  );
}
