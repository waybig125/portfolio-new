"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
const Testimonials = () => {
  return (
    <div>
      <div>
        <h1
          className="items-center snapped relative z-[3] gradient-heading my-[20px] text-center h-[100vh] w-[100%] testimonial-head"
          style={{ scrollSnapStop: "always", fontSize: "30px" }}
        >
          <motion.a
            href="#testimonials"
            className={`gradient-heading font-bold z-[3]`}
          >
            TESTIMONIALS
          </motion.a>
        </h1>
        <a name="testmonials" id="testimonials">
          <Testimonial
            color="white"
            testimonial1=""
            testimonial2=""
            user1=""
            user2=""
          />
          {/* <Testimonial
            color="black"
            testimonial1=""
            testimonial2=""
            user1=""
            user2=""
          /> */}
        </a>
      </div>
    </div>
  );
};

export default Testimonials;

const Testimonial = ({ color, testimonial1, testimonial2, user1, user2 }) => {
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
        className="imp-vh snapped bg-black"
        ref={targetRef}
        style={{ scrollSnapStop: "always", scrollSnapAlign: "auto" }}
      >
        <div className="h-screen sticky flex flex-row items-center top-0 overflow-hidden">
          <div className="h-[300vh] snapped flex-none items-center w-[100%] text-center z-[1]">
            {/* <PointsRing colorFromUser={color} /> */}
            <div className="w-[50%] h-[50%] testimonial gap-[20px] flex text-center items-center bg-black rounded-xl absolute left-[25%] top-[25%]">
              <div className="">
                {/* <FontAwesomeIcon icon="fa-user" /> */}
                <h1
                  className={`text-white text-[30px] min-w-[50px]`}
                  style={{ writingMode: "vertical-lr" }}
                >
                  {user1}
                </h1>
              </div>
              <div className="text-left">
                <p>{testimonial1}</p>
              </div>
            </div>
          </div>
          <motion.div
            className="h-[100vh] flex-none w-[100%] items-center text-center z-[2]"
            style={{ x }}
          >
            <div className="w-[50%] h-[50%] testimonial flex text-center items-center bg-black rounded-xl absolute left-[25%] top-[25%]">
              <div className="">
                {/* <FontAwesomeIcon icon="fa-user" /> */}
                <h1
                  className={`text-white min-w-[50px] mx-[20px] text-[30px]`}
                  style={{ writingMode: "vertical-lr" }}
                >
                  {user2}
                </h1>
              </div>
              <div className="text-left">
                <p>{testimonial2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
