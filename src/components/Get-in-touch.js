import { motion } from "framer-motion";

const ContactMe = () => {
  const email = "stephenafolabi2022@gmail.com";

  return (
    <section className="container py-5 my-5 text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <p className="text-accent mb-3 fw-bold">04. What's Next?</p>
        <h2 className="display-4 fw-bold mb-4 text-primary-color">
          Get In Touch
        </h2>

        <p className="text-secondary mb-5 lead">
          My inbox is always open. Whether you have a question, a project idea,
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.a
          href={`mailto:${email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="d-inline-block"
        >
          <button className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 border-2">
            Say Hello
          </button>
        </motion.a>
      </motion.div>

      <style jsx>{`
        .text-primary-color {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
