import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";
import "animate.css";

const Navigation = () => {
  // Add animation to the Resume button on page load
  useEffect(() => {
    const resumeButton = document.querySelector(".resume-button");
    if (resumeButton) {
      resumeButton.classList.add("animate__animated", "animate__pulse");
    }
  }, []);

  return (
    <header className="pb-5 ff-secondary">
      <nav className="fs-5 fw-light navbar navbar-expand-sm p-4 ps-5 mb-5 fixed-top">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          style={{ color: "#fff" }}
        />

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul
            className="bg-color-dark navbar-nav ms-auto pe-4 ps-4 rounded"
            id="ul"
          >
            {useEffect(() => {
              window.innerWidth < 576 &&
                document
                  .querySelector("ul")
                  .classList.add(
                    "shadow",
                    "animate__animated",
                    "animate__fadeInDown"
                  );
            }, [])}
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#about"
              >
                <span className="text-color-light">01. </span>
                {"<about>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#skills"
              >
                <span className="text-color-light">02. </span>
                {"<skills>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#portfolio"
              >
                <span className="text-color-light">03. </span>
                {"<portfolio>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#career"
              >
                <span className="text-color-light">04. </span>
                {"<career>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="nav-toggler d-inline-block position-relative"
                href="https://resume.io/r/dj6p5YMIv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-cta btn btn2 p-3 fs-5 rounded-pill text-white resume-button animate__animated"
                  onMouseEnter={(e) => {
                    e.target.classList.add("animate__rubberBand"); // Add hover animation
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("animate__rubberBand"); // Remove hover animation
                  }}
                >
                  Resume
                </button>
              </a>
            </li>
            <li className="nav-item pe-3">
              <div className="row">
                <div className="col pt-4">
                  {window.screen.width < 566 && <Social />}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
