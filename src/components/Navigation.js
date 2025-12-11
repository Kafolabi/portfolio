import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Navigation = ({ theme, toggleTheme }) => {
  useEffect(() => {
    const resumeButton = document.querySelector(".resume-button");
    if (resumeButton) {
      resumeButton.classList.add("animate__animated", "animate__pulse");
    }
  }, []);

  return (
    <header className="fixed-top w-100 p-4" style={{ zIndex: 1000 }}>
      <div className="container-fluid px-md-5 d-flex justify-content-between align-items-center">
        {/* Brand */}
        <div className="brand">
          <h3
            className="fw-bold mb-0 text-primary-color"
            style={{ fontSize: "1.8rem", letterSpacing: "-0.5px" }}
          >
            Kolade.
          </h3>
        </div>

        {/* Desktop Navigation (Floating Pill) */}
        <nav className="d-none d-md-flex align-items-center bg-white-glass rounded-pill px-5 py-3 gap-5 nav-pill">
          <a
            href="#about"
            className="nav-link text-primary-color hover-accent fw-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link text-primary-color hover-accent fw-medium"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="nav-link text-primary-color hover-accent fw-medium"
          >
            Projects
          </a>
          <a
            href="#career"
            className="nav-link text-primary-color hover-accent fw-medium"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="nav-link text-primary-color hover-accent fw-medium"
          >
            Contact
          </a>
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="d-flex align-items-center gap-4">
          <button
            onClick={toggleTheme}
            className="btn btn-circle shadow-sm theme-toggle"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faMoon : faSun}
              size="lg"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="btn btn-link d-md-none text-primary-color p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="collapse d-md-none bg-card shadow-lg m-3 rounded-4 p-4 border border-secondary-subtle"
        id="mobileMenu"
      >
        <ul className="navbar-nav gap-3 text-center">
          <li className="nav-item">
            <a href="#about" className="nav-link text-primary-color fs-5">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link text-primary-color fs-5">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link text-primary-color fs-5">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#career" className="nav-link text-primary-color fs-5">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link text-primary-color fs-5">
              Contact
            </a>
          </li>
          <li className="nav-item mt-3">
            <a
              href="https://resume.io/r/dj6p5YMIv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary rounded-pill w-100 py-2">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .text-primary-color {
          color: var(--text-primary);
        }
        .bg-card {
          background-color: var(--bg-card);
        }
        .bg-white-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: none;
        }
        [data-theme="dark"] .bg-white-glass {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: none;
        }
        .nav-link {
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
          opacity: 0.8;
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--accent-color) !important;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background-color: var(--accent-color);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .btn-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .btn-circle:hover {
          transform: scale(1.1) rotate(15deg);
          border-color: var(--accent-color);
          color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-color);
        }
      `}</style>
    </header>
  );
};

export default Navigation;
