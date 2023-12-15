"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import library from "@/utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PointsRing from "./Points";
const Team = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });
  // useEffect(() => {
  //   if (isInView) {
  //     window.addEventListener("wheel", (event) => {
  //       event.preventDefault();
  //       // getting the scrolling speed.
  //       let deltaY = event.deltaY;

  //       // decreasing the scrolling speed by 50 times
  //       let speed = deltaY * 2;

  //       // scrolling the content of the div element
  //       window.scrollTop += speed;
  //     });
  //   }
  // }, [isInView]);
  return (
    <div>
      {/* <div className="snapped bg-yellow-100 h-[100vh] w-[100vw] flex"> */}
      {/* <h1></h1> */}
      <div>
        <h1
          className="items-center relative snapped font-bold z-[3] gradient-heading my-[20px] text-center h-[100vh] w-[100%] testimonial-head"
          style={{ fontSize: "30px", scrollSnapStop: "always" }}
        >
          <motion.a
            href="#team-section-content"
            className={`gradient-heading font-bold z-[9]`}
          >
            MEET THE TEAM
          </motion.a>
        </h1>
        {/* </div> */}
        <a
          name="team-section-content snapped"
          id="team-section-content"
          // ref={ref}
        >
          <TeamMember
            color="yellow"
            name="M.Areeb Tahir"
            job="Senior Developer"
            job2="CEO"
            about="M.Areeb Tahir is an expert computer programmer having specialization in prgramming languages and frameworks including HTML, CSS, JS, PHP, MySQL, React.js, Next.js, Three.js, react-three/fiber, react-three/drei, Node.js etc. He also has specialization in WordPress, WooCommerce etc."
          />
          <TeamMember
            color="red"
            name="Hamza Shah"
            job="Senior Developer"
            job2=""
            about="Hamza Shah is an expert computer programmer having specialization in prgramming languages and frameworks including HTML, CSS, JS, Tailwind CSS, React.js, Next.js, Three.js, Node.js etc."
          />
          <TeamMember
            color="green"
            name="Ameer Hamza & Abdullah"
            job="SEO Experts"
            job2="Social Media Marketers"
            about="Abdullah & Ameer Hamza are brothers who have specialization in SEO(Search Engine Optimization), WordPress Website Development and social media marketing. Moreover, they offer 1 full-free month of social media ads running service and if in those 30 days, you do not get any benefit, they will run free ads for you for the next month as well."
          />
          <TeamMember
            color="lightblue"
            name="Ahmad Minhal"
            job="Social Media Marketer"
            job2=""
            about="Ahmad Minhal is a social media marketer having specialization in running ad campaigns. Moreover, he offers 1 full-free month of social media ads running service and if in those 30 days, you do not get any benefit, he will run free ads for you for the next month as well."
          />
        </a>
      </div>
    </div>
  );
};

export default Team;

const TeamMember = ({ color, name, job, job2, about }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    ["1%", "-100%", "-100%"],
  );
  return (
    <>
      <div
        className="imp-vh bg-black snapped"
        ref={targetRef}
        style={{ scrollSnapStop: "always", scrollSnapAlign: "auto" }}
      >
        <div className="h-screen sticky flex flex-row items-center top-0 overflow-hidden">
          <div className="h-[100vh] snapped flex-none items-center w-[100%] text-center z-[1]">
            <PointsRing colorFromUser={color} />
            <div
              className={`w-[45%] h-[80%] team-member team-member-${color} block text-center items-center bg-black/[0.5] rounded-xl absolute left-[27.5%] top-[10%]`}
            >
              <div className="w-[100%] text-center items-center flex">
                <div
                  className={`w-[60%] relative left-[20%] p-[50px] mt-[30px]`}
                >
                  <FontAwesomeIcon icon="fa-user" className={`text-${color}`} />
                </div>
              </div>
              <div className="w-[100%]">
                <h1
                  className={`text-center mt-[30px] custom-30px-mobile text-xl uppercase`}
                >
                  {name}
                </h1>
                <div className={`text-xs text-white line-height-[10px]`}>
                  {job}
                  {job2 != "" && (
                    <>
                      <br />
                      <span className={`text-xs text-${color}`}>& {job2}</span>
                    </>
                  )}
                </div>
                {/* <div></div> */}
              </div>
            </div>
          </div>
          <motion.div
            className="h-[100vh] flex-none w-[100%] items-center text-center z-[2]"
            style={{ x }}
          >
            <div
              className={`w-[50%] h-[50%] team-member team-member-${color} flex text-center items-center bg-black rounded-xl absolute left-[25%] top-[25%]`}
            >
              <div className="">{about}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
