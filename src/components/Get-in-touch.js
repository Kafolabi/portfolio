// import { heading } from "../functionality.js";
// import { motion } from "framer-motion";

// const ContactMe = () => {
//   const email = "stephenafolabi2022@gmail.com";

//   const handleClick = () => {
//     window.location.href = `mailto:${email}`;
//   };

//   return (
//     <motion.section
//       className="container my-5 py-5 ff-primary"
//       id="contact"
//       initial={{ opacity: 0, x: 100 }} // Slide in from the right
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
//     >
//       <h1>{heading("05. ", " <get in touch>")}</h1>
//       <p className="fs-2 mt-5" style={{ lineHeight: "2.5rem" }}>
//         My inbox is always open. Whether you have a question or project or just
//         want to say hi, I'll try my best to get back to you!
//       </p>
//       <a href={`mailto:${email}`} onClick={handleClick}>
//         <motion.button
//           className="bg-cta btn btn2 text-white ms-3 mt-5 p-3 fs-5 px-5"
//           whileHover={{
//             scale: 1.1,
//             transition: { duration: 0.3 },
//           }}
//           whileTap={{
//             scale: 0.95,
//             transition: { duration: 0.2 },
//           }}
//         >
//           Say Hello!
//         </motion.button>
//       </a>
//       <h1 className="opacity-75 text-end mt-4">
//         {heading("", " </get in touch>")}
//       </h1>
//     </motion.section>
//   );
// };

// export default ContactMe;

import { heading } from "../functionality.js";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactMe = () => {
  const email = "stephenafolabi2022@gmail.com";
  const ref = useRef(null); // Reference to the section
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger animation when in view

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.section
      ref={ref}
      className="container my-5 py-5 ff-primary"
      id="contact"
      initial={{ opacity: 0, y: 100 }} // Initial state: hidden and below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <h1>{heading("05. ", " <get in touch>")}</h1>
      <p className="fs-2 mt-5" style={{ lineHeight: "2.5rem" }}>
        My inbox is always open. Whether you have a question or project or just
        want to say hi, I'll try my best to get back to you!
      </p>
      <a href={`mailto:${email}`} onClick={handleClick}>
        <motion.button
          className="bg-cta btn btn2 text-white ms-3 mt-5 p-3 fs-5 px-5"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
        >
          Say Hello!
        </motion.button>
      </a>
      <h1 className="opacity-75 text-end mt-4">
        {heading("", " </get in touch>")}
      </h1>
    </motion.section>
  );
};

export default ContactMe;
