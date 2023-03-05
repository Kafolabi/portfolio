import { heading } from "../functionality.js";

const ContactMe = () => {
  return (
    <section className="container my-5 py-5 ff-primary" id="contact">
      <h1> {heading("05. ", " <get in touch>")} </h1>
      <p className="fs-2 mt-5" style={{ lineHeight: "2.5rem" }}>
        My inbox is always open. Whether you have a question or project or just
        want to say hi, I'll try my best to get back to you!
      </p>
      <button className="bg-cta btn btn2 text-white ms-3 mt-5 p-3 fs-5 px-5">
        Say Hello!
      </button>
      <h1 className="opacity-75 text-end mt-4">
        {" "}
        {heading("", " </get in touch>")}{" "}
      </h1>
    </section>
  );
};

export default ContactMe;
