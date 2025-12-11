import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Naija Cre8",
    description:
      "Ticket booking platform for Naija Cre8 - the biggest gathering of Nigerian creatives. Features event details, ticket booking, and secure payments via Paystack API.",
    tech: ["React", "Chakra UI", "Paystack API"],
    github: "https://github.com/Kafolabi/naija-cre8",
    link: "https://naijacre8.com",
  },
  {
    title: "The Aeronautical Integration Company",
    description:
      "Landing page for TAIC, helping organizations streamline aviation operations. Features service information and consultation booking.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Kafolabi/mortgage-repayment-app",
    link: "https://taic.com.ng/",
  },
  {
    title: "Euphorialook Ecommerce",
    description:
      "Fully functional ecommerce website for a leading fashion brand. Allows users to browse products, add to cart, and make purchases.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    github: null, // Private or N/A
    link: "https://euphorialook.com/",
  },
  {
    title: "Fast React Pizza",
    description:
      "Web application for ordering pizzas online. Users can customize pizzas, add toppings, and view order summary. Built with Redux for state management.",
    tech: ["React", "Redux", "React Router"],
    github: "https://github.com/Kafolabi/fast-react-pizza",
    link: "https://fast-react-pizza-eta-sandy.vercel.app/",
  },
  {
    title: "Forkify Recipe App",
    description:
      "Responsive recipe application. Search for dishes, add ingredients to shopping list, and view recipe details. Powered by a custom API.",
    tech: ["JavaScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Kafolabi/forkify",
    link: "https://forkify-nine-tan.vercel.app/",
  },
  {
    title: "Mapty Fitness Tracker",
    description:
      "Map-based workout tracker. Log running and cycling activities, view workout history, and analyze performance. Uses Geolocation API and LocalStorage.",
    tech: ["HTML", "CSS", "ES6+ JavaScript"],
    github: "https://github.com/Kafolabi/mapty",
    link: "https://my-mapty-fitness.netlify.app/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="col-md-6 col-lg-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card h-100 border-0 bg-card shadow-sm project-card"
        whileHover={{ y: -10 }}
      >
        <div className="card-body d-flex flex-column p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <FontAwesomeIcon icon={faFolder} className="text-accent fa-2x" />
            <div className="d-flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover-accent"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover-accent"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                </a>
              )}
            </div>
          </div>

          <h3 className="card-title h4 fw-bold mb-3 text-primary-color">
            {project.title}
          </h3>

          <p className="card-text text-secondary mb-4 flex-grow-1">
            {project.description}
          </p>

          <div className="d-flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill fw-normal px-3 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="py-5" id="portfolio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <h2 className="d-flex align-items-center text-primary-color">
            <span className="text-accent me-2">03.</span>
            <span className="fw-bold">Some Things I've Built</span>
            <span className="line ms-3 d-none d-sm-block"></span>
          </h2>
        </motion.div>

        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-card {
          background-color: var(--bg-card);
        }
        .text-primary-color {
          color: var(--text-primary);
        }
        .hover-accent:hover {
          color: var(--accent-color) !important;
        }
        .line {
          height: 1px;
          background-color: var(--text-secondary);
          opacity: 0.3;
          flex-grow: 1;
          max-width: 300px;
        }
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          box-shadow: var(--shadow-lg) !important;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
