import React, { useEffect, useState } from "react";
import Social from "./Social.js";
import portfolioPic from "./portfolio-pic3.jpg";
import { motion } from "framer-motion";

const Heading = ({ theme }) => {
  const [text, setText] = useState("");
  const fullText =
    "I'm a front-end developer passionate about crafting intuitive, responsive, and visually engaging interfaces that connect business goals with seamless user experiences.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-1 d-none d-lg-block">
            <Social />
          </div>

          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-accent mb-3 fw-bold">Hi, I'm</h2>
              <h1 className="display-3 fw-bold mb-4">
                Kolade
                <span className="d-block text-secondary-color">
                  Front-End Developer
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="lead mb-5 text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ minHeight: "4.5rem" }}
            >
              {text}
              <span className="cursor-blink">|</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#contact" className="text-decoration-none">
                <motion.button
                  className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </a>
              <a href="#portfolio" className="text-decoration-none ms-4">
                <motion.button
                  className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.button>
              </a>
            </motion.div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="blob-shape position-absolute top-50 start-50 translate-middle" />
              <motion.img
                src={portfolioPic}
                alt="Kolade"
                className="img-fluid rounded-circle shadow-lg position-relative"
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  border: "4px solid var(--bg-card)",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-secondary-color {
          color: var(--text-secondary);
          font-size: 0.6em;
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .blob-shape {
          width: 400px;
          height: 400px;
          background: var(--accent-color);
          opacity: 0.1;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 8s ease-in-out infinite;
          z-index: 0;
        }
        @keyframes morph {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          50% {
            border-radius: 30% 30% 70% 70% / 50% 20% 60% 40%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }
      `}</style>
    </section>
  );
};

export default Heading;
