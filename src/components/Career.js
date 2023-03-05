import { heading } from "../functionality.js";

const Career = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="career">
      <h1> {heading("04. ", " <my working career>")} </h1>
      <h2 className="mt-5">
        <span className="text-color-light">Freelance developer.</span>
        <span className="fw-light"> 2020</span>
      </h2>
      <h2 style={{ lineHeight: "2.5rem" }}>
        <span className="text-color-light">Front-end engineer.</span>
        <span className="fw-light"> @ Valueadd Agro Ventures 2021 - date</span>
      </h2>
      <h1 className="pt-4 opacity-75 text-end">
        {" "}
        {heading("", " </my working career>")}{" "}
      </h1>
    </section>
  );
};

export default Career;
