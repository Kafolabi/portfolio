import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

// document.addEventListener("DOMContentLoaded", function () {
//   if (window.innerWidth > 765)
//     document.getElementById("ul").style.color = "red";
// });
const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

        {/* </button> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul
            className="bg-color-dark navbar-nav ms-auto pe-4 ps-4 shadow rounded"
            id="ul"
            // onLoad={showFeature()}
            // style={{ backgroundColor: "white" }}
            // {...(window.innerWidth > 765
            //   ? (document.getElementById("ul").style.color = "red")
            //   : console.log(""))}
            // {...(window.innerWidth > 765
            //   ? console.log("Hello")
            //   : console.log(""))}
            // style={window.screen.width > 767 && "backgroundColor: white"}
          >
            {windowWidth > 575 &&
            document.getElementById("ul").classList.contains("shadow")
              ? document.getElementById("ul").classList.remove("shadow")
              : ""}
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#"
              >
                <span className="text-color-light">01. </span>
                {"<about>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#"
              >
                <span className="text-color-light">02. </span>
                {"<skills>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#"
              >
                <span className="text-color-light">03. </span>
                {"<portfolio>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#"
              >
                <span className="text-color-light">04. </span>
                {"<career>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="nav-link nav-toggler d-inline-block position-relative"
                href="#"
              >
                <span className="text-color-light">05. </span>
                {"<contact>"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
