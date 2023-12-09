"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export default function Preloader() {
  // const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = () => {
      setTimeout(() => setLoading(false), 200);
    };
    load();
    // window.onload = load();
    // alert(window.onload);
    // window.addEventListener("DOMContentLoaded", load);
    // return () => {
    // window.removeEventListener("DOMContentLoaded", lo);
    // };
  });
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={`bg-transparent fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999]`}
            // initial={{ opacity: 1 }}
            // animate={{ opacity: 1 }}
            transition={{
              // type: "spring",
              // stiffness: 100,
              ease: "linear",
              duration: 2,
            }}
            exit={{ top: "-100%" }}
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
