import React from "react";
import { motion } from "framer-motion";

const CareerItem = ({ title, company, period, delay }) => (
  <motion.div
    className="mb-5 position-relative ps-4 border-start border-2 border-accent"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div
      className="position-absolute top-0 start-0 translate-middle bg-accent rounded-circle"
      style={{
        width: "12px",
        height: "12px",
        border: "2px solid var(--bg-primary)",
      }}
    ></div>
    <h3 className="h4 fw-bold text-primary-color mb-1">{title}</h3>
    <h4 className="h5 text-accent mb-2">{company}</h4>
    <span className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill fw-normal px-3 py-2">
      {period}
    </span>
  </motion.div>
);

const Career = () => {
  return (
    <section className="container py-5 my-5" id="career">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="d-flex align-items-center text-primary-color mb-5">
          <span className="text-accent me-2">04.</span>
          <span className="fw-bold">Experience</span>
          <span className="line ms-3 d-none d-sm-block"></span>
        </h2>
      </motion.div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <CareerItem
            title="Freelance Frontend Developer"
            company="Self-Employed"
            period="2024 - Present"
            delay={0.2}
          />
          <CareerItem
            title="Frontend Engineer"
            company="Valueadd Agro Ventures"
            period="2021 - 2023"
            delay={0.4}
          />
          <CareerItem
            title="Frontend Development Intern"
            company="Qucoon (Univaciti)"
            period="2021"
            delay={0.6}
          />
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
        .bg-accent {
          background-color: var(--accent-color);
        }
      `}</style>
    </section>
  );
};

export default Career;
