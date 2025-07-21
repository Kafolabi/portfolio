import React, { useEffect, useState } from "react";
import portfolioPic2 from "./portfolio-pic2.jpg";
import { heading } from "../functionality.js";

const About = () => {
  // Typing animation states
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const fullText1 =
    "Hi 👋, I'm Kolade Afolabi—a cheerful web developer with a knack for aesthetics and a passion for creating cool things on the web. My journey into web development began in the summer of 2020, during the COVID-19 lockdown. Eager to learn something new, I discovered freeCodeCamp and completed the entire HTML and CSS course in just two months.";
  const fullText2 =
    "Fast forward to today, I’m a freelancer dedicated to building modern, dynamic web interfaces and applications using React and Bootstrap. I love crafting seamless experiences for my clients and bringing ideas to life!";

  // Show full text immediately (no typing animation)
  useEffect(() => {
    setText1(fullText1);
    setText2(fullText2);
  }, []);

  return (
    <section className="container mt-5 pt-5 mb-5 pb-5" id="about">
      {/* Heading */}
      <h1>
        {heading("01. ", " <a little about me>")}
      </h1>

      <div className="row gap-5">
        {/* Text content */}
        <div className="col-sm">
          <p className="pt-4 fs-5">{text1}</p>
          <p className="pt-4 fs-5">{text2}</p>
        </div>

        {/* Image */}
        <div className="col-sm">
          <img
            src={portfolioPic2}
            width={340}
            height={300}
            style={{ zIndex: "1" }}
            alt="pic-of-me"
            className="rounded mb-5 mx-auto d-block"
          />
        </div>
      </div>

      {/* Closing heading */}
      <h1 className="opacity-50 text-end">
        {heading("", " </a little about me>")}
      </h1>
    </section>
  );
};

export default About;
