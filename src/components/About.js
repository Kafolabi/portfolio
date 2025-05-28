
import React, { useEffect, useState } from "react";
import portfolioPic2 from "./portfolio-pic2.jpg";
import { heading } from "../functionality.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Animation triggers when 20% of the element is visible
  });

  // Typing animation states
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const fullText1 =
    "Hi 👋, I'm Kolade Afolabi—a cheerful web developer with a knack for aesthetics and a passion for creating cool things on the web. My journey into web development began in the summer of 2020, during the COVID-19 lockdown. Eager to learn something new, I discovered freeCodeCamp and completed the entire HTML and CSS course in just two months.";
  const fullText2 =
    "Fast forward to today, I’m a freelancer dedicated to building modern, dynamic web interfaces and applications using React and Bootstrap. I love crafting seamless experiences for my clients and bringing ideas to life!";

  // Trigger animations when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Typing animation logic
      let currentIndex1 = 0;
      let currentIndex2 = 0;

      const interval1 = setInterval(() => {
        if (currentIndex1 <= fullText1.length) {
          setText1(fullText1.slice(0, currentIndex1));
          currentIndex1++;
        } else {
          clearInterval(interval1);
        }
      }, 35); // Adjust typing speed here

      const interval2 = setInterval(() => {
        if (currentIndex2 <= fullText2.length) {
          setText2(fullText2.slice(0, currentIndex2));
          currentIndex2++;
        } else {
          clearInterval(interval2);
        }
      }, 50); // Adjust typing speed here

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }
  }, [controls, inView]);

  // Variants for sliding in from the right
  const textVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0, // Slide to the original position
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0, // Slide to the original position
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }, // Slight delay for staggered effect
    },
  };

  return (
    <motion.section
      className="container mt-5 pt-5 mb-5 pb-5"
      id="about"
      ref={ref}
    >
      {/* Heading with sliding animation */}
      <motion.h1 initial="hidden" animate={controls} variants={textVariants}>
        {heading("01. ", " <a little about me>")}
      </motion.h1>

      <div className="row gap-5">
        {/* Text content with sliding and typing animations */}
        <motion.div
          className="col-sm"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <p className="pt-4 fs-5 typing-animation">{text1}</p>
          <p className="pt-4 fs-5 typing-animation">{text2}</p>
        </motion.div>

        {/* Image with sliding animation */}
        <motion.div
          className="col-sm"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <img
            src={portfolioPic2}
            width={340}
            height={300}
            style={{ zIndex: "1" }}
            alt="pic-of-me"
            className="rounded mb-5 mx-auto d-block"
          />
        </motion.div>
      </div>

      {/* Closing heading with sliding animation */}
      <motion.h1
        className="opacity-50 text-end"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        {heading("", " </a little about me>")}
      </motion.h1>
    </motion.section>
  );
};

export default About;
