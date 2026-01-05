import Skillset from "./Skillset.js";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="container py-5 my-5" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="d-flex align-items-center text-primary-color mb-5">
          <span className="text-accent me-2">02.</span>
          <span className="fw-bold">My Skills</span>
          <span className="line ms-3 d-none d-sm-block"></span>
        </h2>
      </motion.div>

      <motion.div
        className="card border-0 shadow-lg p-4 p-md-5 bg-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Skillset />
      </motion.div>

      <style jsx>{`
        .text-primary-color {
          color: var(--text-primary);
        }
        .line {
          height: 1px;
          background-color: var(--text-secondary);
          opacity: 0.3;
          flex-grow: 1;
          max-width: 300px;
        }
        .bg-card {
          background-color: var(--bg-card);
        }
      `}</style>
    </section>
  );
};

export default Skills;
