"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <nav
        className={`flex flex-row text-white h-[60px] fixed z-[999] bottom-0 left-0 bg-transparent w-[100vw] text-center align-center items-center justify-center`}
      >
        <a
          type="button"
          onClick={() => setToggle(!toggle)}
          className={`cursor-pointer logo p-[2px] rounded-full w-[50px] h-[50px] hover:bg-[#2dd4bf]/[0.8] bg-black fixed left-[10px] bottom-[10px] z-[999]`}
        >
          <img
            src={`./assets/Logo-Dark.gif`}
            className={`rounded-full w-[50px] h-[50px]`}
          />
        </a>
        <AnimatePresence>
          {toggle && (
            <div
              className={`fixed text-center py-[60px] left-0 bottom-[70px] h-[90vh] w-[60px] bg-transparent`}
              exit={{ height: 0 }}
              transition={{ ease: "linear", duration: 1, delay: 0.2 }}
            >
              <a
                href="/#"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] border border-[#2dd4bf] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                Home
              </a>
              <a
                href="/#about"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] border border-[#2dd4bf] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                About
              </a>
              <a
                href="/#projects"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] border border-[#2dd4bf] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                Projects
              </a>
              <a
                href="/#team-section-content"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] border border-[#2dd4bf] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                Team
              </a>
              {/* <a
                href="/#testimonials"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                Testimonials
              </a> */}
              <a
                href="/#contact"
                style={{ writingMode: "vertical-lr" }}
                className={`block hover:text-[#000] border border-[#2dd4bf] hover:bg-[#2dd4bfc5] text-center rounded-xl bg-[#000] p-[10px] mx-[10px] my-[10px]`}
              >
                Contact
              </a>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
