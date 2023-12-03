"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/app/styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "@/utils/motions";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Muhamamd Areeb",
          from_email: form.email,
          to_email: "waybig125@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return (
    <div className={`xl:mt-12 flex gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-[#2dd4bf]/[0.05] border-[#2dd4bf] border-2 border-solid p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-[#f6f6f6]`}>
          Get in touch
        </p>
        <h3
          className={`${styles.sectionHeadText}`}
          style={{ color: "#2dd4bf" }}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            {/* <span className="text-black font-extrabold mb-2">Your Name</span> */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name?"
              className="focus:border-[#2dd4bf]/[0.5] border-[#2dd4bf] border border-solid bg-black/[0.5] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-black font-extrabold mb-2">Your email</span> */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email?"
              className="focus:border-[#2dd4bf]/[0.5] border-[#2dd4bf] border border-solid bg-black/[0.5] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            {/* <span className="text-black font-extrabold mb-2">Your Message</span> */}
            <textarea
              rows={1}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message?"
              className="focus:border-[#2dd4bf]/[0.5] border-[#2dd4bf] border border-solid resize-none bg-[#000]/[0.5] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#2dd4bf] border border-[#000] hover:border-[#2dd4bf] hover:bg-black hover:text-[#2dd4bf] py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-[#000]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
