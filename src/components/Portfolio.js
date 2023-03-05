import { heading } from "../functionality.js";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="portfolio">
      <h1> {heading("03. ", " <portfolio>")} </h1>
      <div className="row mt-5">
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg mt-4 pt-4 mb-4">
            <div className="card-header border-0 bg-transparent">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="2x"
                className="m-4 text-color-light d-block"
              />
            </div>
            <div className="card-body ms-5 me-5">
              <h2 className="fw-bolder">Simple Calculator App</h2>
              <p className="fs-5 opacity-75">
                A simple calculator app that implements basic functions such as
                addition, subtraction, multiplication and division using HTML,
                CSS and vanilla JS
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm container">
          <div className="card rounded-4 bg-transparent border-0 shadow-lg mt-4 pt-4 mb-4">
            <div className="card-body ms-5 me-5">
              <p className="fs-5 pt-5 opacity-75">
                A simple calculator app that implements basic functions such as
                addition, subtraction, multiplication and division using HTML,
                CSS and vanilla JS
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="opacity-50 text-end"> {heading("", "</portfolio>")} </h1>
    </section>
  );
};

export default Portfolio;
