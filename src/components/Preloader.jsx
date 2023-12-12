"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [goUp, setGoUp] = useState("");
  useEffect(() => {
    const load = () => {
      setTimeout(() => setLoading(false), 1200);
      setTimeout(() => setGoUp(" anim_up", 0));
    };
    load();
  });
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={`bg-transparent ${goUp} fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999]`}
            // initial={{ opacity: 1 }}
            // animate={{ opacity: 1 }}
            // transition={{
            // type: "spring",
            // stiffness: 100,
            // ease: "ease-in-out",
            // duration: 2,
            // }}
            // exit={{ top: "-100%" }}
          >
            <div
              className={`bg-black h-[100%] w-[100%] flex justify-center text-center align-center items-center`}
            >
              <div id="loader" className={`z-[9999] w-[50px] h-[50px]`}>
                <img
                  src={`./assets/Logo-Dark.gif`}
                  className={`w-[50px] h-[50px]`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
