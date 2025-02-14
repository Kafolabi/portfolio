import { heading } from "../functionality.js";
import Skillset from "./Skillset.js";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="skills">
      <h1> {heading("02. ", "<my skills>")} </h1>

      {/* Card with hover animations */}
      <motion.div
        className="card bg-transparent border-0 rounded-lg shadow-lg mt-4 pt-4 mb-4"
        whileHover={{
          scale: 1.05, // Zoom in effect
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Shadow effect
          transition: { duration: 0.5, ease: "easeOut" }, // Smooth transition
        }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition on hover out
      >
        <div className="card-body ms-2 me-2">
          <Skillset />
        </div>
      </motion.div>

      <h1 className="opacity-50 text-end"> {heading("", "</my skills>")} </h1>
    </section>
  );
};

export default Skills;
