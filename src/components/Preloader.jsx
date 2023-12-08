"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export default function Preloader() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`bg-transparent fixed top-0 left-0 w-[100vw] h-[100vh] z-[9999]`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
      </AnimatePresence>
    </>
  );
}
