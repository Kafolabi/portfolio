import React from "react";
import portfolioPic2 from "./portfolio-pic2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="container py-5 my-5" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="d-flex align-items-center text-primary-color mb-5">
          <span className="text-accent me-2">01.</span>
          <span className="fw-bold">About Me</span>
          <span className="line ms-3 d-none d-sm-block"></span>
        </h2>
      </motion.div>

      <div className="row align-items-center gap-5 gap-lg-0">
        <div className="col-lg-7 order-2 order-lg-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="lead text-secondary mb-4">
              Hi 👋, I'm{" "}
              <span className="text-accent fw-bold">Kolade Afolabi</span>—a
              cheerful web developer with a knack for aesthetics and a passion
              for creating cool things on the web.
            </p>
            <p className="text-secondary mb-4">
              My journey into web development began in the summer of 2020,
              during the COVID-19 lockdown. Eager to learn something new, I
              discovered freeCodeCamp and completed the entire HTML and CSS
              course in just two months.
            </p>
            <p className="text-secondary mb-4">
              Fast forward to today, I’m a freelancer dedicated to building
              modern, dynamic web interfaces and applications using{" "}
              <span className="text-accent">React</span> and{" "}
              <span className="text-accent">Bootstrap</span>. I love crafting
              seamless experiences for my clients and bringing ideas to life!
            </p>
          </motion.div>
        </div>

        <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
          <motion.div
            className="position-relative mx-auto"
            style={{ maxWidth: "300px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              className="position-absolute w-100 h-100 border border-2 border-accent rounded top-0 start-0 translate-middle-x mt-3 ms-3 d-none d-md-block"
              style={{ zIndex: 0 }}
            ></div>
            <motion.img
              src={portfolioPic2}
              alt="Kolade Afolabi"
              className="img-fluid rounded shadow-lg position-relative"
              style={{
                zIndex: 1,
                filter: "grayscale(20%)",
                transition: "filter 0.3s ease",
              }}
              whileHover={{ filter: "grayscale(0%)", scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>

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
        .border-accent {
          border-color: var(--accent-color) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
