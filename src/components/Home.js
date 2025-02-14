// import Social from "./Social.js";
// import portfolioPic from "./portfolio-pic.jpg";
// import Caption from "./HeadingCaption.js";
// import * as motion from "motion/react-client";

// const Heading = () => {
//   return (
//     <section className="mt-5 pt-3 mb-5 pb-5">
//       <div className="row">
//         <div className="col-sm-1 pt-4">
//           {window.screen.width > 767 && <Social />}
//         </div>
//         <div className="col-sm-5 pt-md-5">
//           <motion.div
//             className="display-4 fw-bold"
//             initial={{ opacity: 0, y: -70 }}
//             animate={{ opacity: 1, y: 0, transition: { duration: 2.5 } }}
//             animate={{ opacity: 1, y: 0, transition: { duration: 2.5 } }}
//           >
//             Hi, I'm <span className="text-color-light">Kolade</span>
//           </motion.div>
//           <motion.div
//             className="display-4 fw-bold pt-3"
//             initial={{ opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0, transition: { duration: 2.5 } }}
//           >
//             <span className="text-color-light">front-end developer</span>
//           </motion.div>
//         </div>
//         <div className="col-sm-6">
//           <motion.img
//             src={portfolioPic}
//             style={{ zIndex: "1" }}
//             alt="pic-of-me"
//             className="mt-5 mb-5 w-50 h-75 rounded mx-auto d-block"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1, transition: { duration: 2.5 } }}
//           ></motion.img>

//         </div>
//         {/* <div className='col-sm-1 mail'>koladeafolabi2020@gmail.com</div> */}
//       </div>
//       <p className="p1 fs-5 pt-1 pt-lg-2 container">
//         I'm a front-end developer making great stuff happen since 2020!
//         {window.screen.width > 576 && <Caption />}
//       </p>
//       <div className="container">
//         <a href="#contact">
//           <button className="bg-cta btn btn2 text-white ms-3 mt-4 p-3 fs-5 px-5">
//             Contact Me
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Heading;

// import Social from "./Social.js";
// import portfolioPic from "./portfolio-pic.jpg";
// import Caption from "./HeadingCaption.js";
// import { motion } from "framer-motion";

// const Heading = () => {
//   return (
//     <section className="mt-5 pt-3 mb-5 pb-5">
//       <div className="row">
//         <div className="col-sm-1 pt-4">
//           {window.screen.width > 767 && <Social />}
//         </div>
//         <div className="col-sm-5 pt-md-5">
//           <motion.div
//             className="display-4 fw-bold motion-placeholder"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               transition: { duration: 2.5, ease: "easeInOut" },
//             }}
//           >
//             Hi, I'm <span className="text-color-light">Kolade</span>
//           </motion.div>
//           <motion.div
//             className="display-4 fw-bold pt-3 motion-placeholder"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               transition: { duration: 2.5, ease: "easeInOut" },
//             }}
//           >
//             <span className="text-color-light">front-end developer</span>
//           </motion.div>
//         </div>
//         <div className="col-sm-6">
//           <motion.img
//             src={portfolioPic}
//             style={{ zIndex: "1" }}
//             alt="pic-of-me"
//             className="mt-5 mb-5 w-50 h-75 rounded mx-auto d-block"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               transition: { duration: 2.5, ease: "easeInOut" },
//             }}
//           />
//         </div>
//       </div>
//       <p className="p1 fs-5 pt-1 pt-lg-2 container">
//         I'm a front-end developer making great stuff happen since 2020!
//         {window.screen.width > 576 && <Caption />}
//       </p>
//       <div className="container">
//         <a href="#contact">
//           <button className="bg-cta btn btn2 text-white ms-3 mt-4 p-3 fs-5 px-5">
//             Contact Me
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Heading;

import Social from "./Social.js";
import portfolioPic from "./portfolio-pic.jpg";
import Caption from "./HeadingCaption.js";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <section className="mt-5 pt-3 mb-5 pb-5">
      <div className="row">
        <div className="col-sm-1 pt-4">
          {window.screen.width > 767 && <Social />}
        </div>
        <div className="col-sm-5 pt-md-5">
          <motion.div
            className="display-4 fw-bold motion-placeholder"
            initial="hidden"
            animate="visible"
            layout
            variants={{
              hidden: { opacity: 0, y: 0 }, // Start at the same y position to avoid jumping
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
              },
            }}
          >
            Hi, I'm <span className="text-color-light">Kolade</span>
          </motion.div>

          <motion.div
            className="display-4 fw-bold pt-3 motion-placeholder"
            initial="hidden"
            animate="visible"
            layout
            variants={{
              hidden: { opacity: 0, y: 0 }, // No vertical shift on load
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
              },
            }}
          >
            <span className="text-color-light">front-end developer</span>
          </motion.div>
        </div>

        <div className="col-sm-6">
          <motion.img
            src={portfolioPic}
            style={{ zIndex: "1" }}
            alt="pic-of-me"
            className="mt-5 mb-5 w-50 h-75 rounded mx-auto d-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 2.5, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        </div>
      </div>

      <p className="p1 fs-5 pt-1 pt-lg-2 container">
        I'm a front-end developer making great stuff happen since 2020!
        {window.screen.width > 576 && <Caption />}
      </p>

      <div className="container">
        <motion.a href="#contact">
          <motion.button
            className="bg-cta btn btn2 text-white ms-3 mt-4 p-3 fs-5 px-5"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
          >
            Contact Me
          </motion.button>
        </motion.a>
      </div>
    </section>
  );
};

export default Heading;
