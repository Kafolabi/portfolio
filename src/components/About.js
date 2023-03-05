import portfolioPic2 from "./portfolio-pic2.jpg";
import { heading } from "../functionality.js";

const About = () => {
  return (
    <section className="container mt-5 pt-5 mb-5 pb-5" id="about">
      <h1> {heading("01. ", " <a little about me>")} </h1>
      <div className="row gap-5">
        <div className="col-sm">
          <p className="pt-4 fs-5">
            Hi 👋, I'm Stephen Afolabi, a jolly web developer 😀😀😀 who has a
            flair for aesthetic and making cool stuff on the web. I stumbled
            upon web development in the summer of 2020, during the popular COVID
            -19 lockdown. While trying to get my hands dirty, I stumbled upon
            freeCodeCamp and in just two months, I finished the entire HTMl &
            CSS course.
          </p>
          <p className="pt-4 fs-5">
            Fast forward today, I'm a freelancer who loves building modern, rich
            web interfaces and apps for my clients with React and Bootstrap!
          </p>
        </div>
        <div className="col-sm">
          <img
            src={portfolioPic2}
            width={340}
            height={300}
            style={{ zIndex: "1" }}
            alt="pic-of-me"
            className=" rounded mb-5 mx-auto d-block"
          ></img>
          {/* <span className='img-caption'>Photo by Lukas</span> */}
        </div>
      </div>
      <h1 className="opacity-50 text-end">
        {" "}
        {heading("", " </a little about me>")}{" "}
      </h1>
    </section>
  );
};

export default About;
