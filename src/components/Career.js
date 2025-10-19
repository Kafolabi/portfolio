import { heading } from "../functionality.js";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Career = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  // Trigger animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for sliding in from below
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: {
      opacity: 1,
      y: 0, // Slide to the original position
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="container my-5 py-5 ff-primary"
      id="career"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideInVariants}
    >
      <h1> {heading("04. ", " <my working career>")} </h1>

      
      <motion.h2
        style={{ lineHeight: "2.5rem" }}
        className="mt-4"
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        transition={{ delay: 0.4 }} // Slight delay for staggered effect
      >
        <span className="text-color-light">Front end development Intern @ Qucoon (Univaciti)</span>
        <span className="fw-light"> 2021 </span>
      </motion.h2>

      <motion.h2
        className="mt-3"
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        transition={{ delay: 0.2 }} // Slight delay for staggered effect
      >
        <span className="text-color-light">
          Frontend engineer @ Valueadd Agro Ventures
        </span>
        <span className="fw-light"> 2021 - 2023</span>
      </motion.h2>

      
      <motion.h2
        style={{ lineHeight: "2.5rem" }}
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        transition={{ delay: 0.4 }} // Slight delay for staggered effect
      >
        <span className="text-color-light">Freelancer</span>
        <span className="fw-light"> 2024 - Present </span>
      </motion.h2>

      <motion.h1
        className="pt-4 opacity-75 text-end"
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        transition={{ delay: 0.6 }} // Slight delay for staggered effect
      >
        {heading("", " </my working career>")}
      </motion.h1>
    </motion.section>
  );
};

export default Career;
