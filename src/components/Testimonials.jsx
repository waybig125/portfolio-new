"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import library from "@/utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PointsRing from "./Points";
import PhysicsRigidBody from "./canvas/PhysicsRigidBody";
const Testimonials = () => {
  return (
    <div>
      {/* <div className="snapped bg-yellow-100 h-[100vh] w-[100vw] flex"> */}
      {/* <h1></h1> */}
      <div>
        <h1
          className="items-center snapped relative z-[3] gradient-heading my-[20px] text-center h-[100vh] w-[100%] testimonial-head"
          style={{ scrollSnapType: "always", fontSize: "30px" }}
        >
          <motion.a
            href="#testimonials"
            className={`gradient-heading font-bold z-[3]`}
          >
            TESTIMONIALS
          </motion.a>
        </h1>
        {/* <div className={`h-[100vh] w-[100%] block`}>
          <PhysicsRigidBody />
        </div> */}
        {/* </div> */}
        <a name="testmonials" id="testimonials">
          <Testimonial color="white" />
          <Testimonial color="black" />
        </a>
      </div>
    </div>
  );
};

export default Testimonials;

const Testimonial = ({ color }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
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
          <div className="h-[100vh] snapped flex-none items-center w-[100%] text-center z-[1]">
            <PointsRing colorFromUser={color} />
            <div className="w-[50%] h-[50%] testimonial flex text-center items-center bg-black rounded-xl absolute left-[25%] top-[25%]">
              <div className="w-[20%]">
                <FontAwesomeIcon icon="fa-user" />
              </div>
              <div className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, consequuntur. Exercitationem, deserunt rerum, magnam
                dolorem saepe minus nemo vel temporibus architecto, facilis
                accusantium aliquid veniam soluta veritatis! Eum, expedita
                ratione?
              </div>
            </div>
          </div>
          <motion.div
            className="h-[100vh] flex-none w-[100%] items-center text-center z-[2]"
            style={{ x }}
          >
            <div className="w-[50%] h-[50%] testimonial flex text-center items-center bg-black rounded-xl absolute left-[25%] top-[25%]">
              <div className="w-[20%]">
                <FontAwesomeIcon icon="fa-user" />
              </div>
              <div className="w-[80%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, consequuntur. Exercitationem, deserunt rerum, magnam
                dolorem saepe minus nemo vel temporibus architecto, facilis
                accusantium aliquid veniam soluta veritatis! Eum, expedita
                ratione?
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
