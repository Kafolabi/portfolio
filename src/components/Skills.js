import { heading } from "../functionality.js";
import Skillset from "./Skillset.js";

const Skills = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="skills">
      <h1> {heading("02. ", "<my skills>")} </h1>
      <div className="card bg-transparent border-0 shadow-lg mt-4 pt-4 mb-4">
        <div className="card-body ms-3 me-3">
          <Skillset />
        </div>
      </div>
      <h1 className="opacity-50 text-end"> {heading("", "</my skills>")} </h1>
    </section>
  );
};

export default Skills;
