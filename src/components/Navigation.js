// import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { useEffect } from "react";

const Navigation = () => {
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

        {/* </button> */}
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
              >
                <button
                  className="bg-cta btn btn2 p-3 fs-5 rounded-pill text-white"
                  target="_blank"
                >
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
