import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Progressbars = ({ name, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  // Animate the progress bar when in view
  useEffect(() => {
    if (inView) {
      controls.start({ width: value }); // Animate to the final width
    }
  }, [controls, inView, value]);

  return (
    <div className="row p-2 pt-3" ref={ref}>
      <div className="col-sm-4">
        <h3 className="p-2">{name}</h3>
      </div>
      <div className="col-sm-8">
        <div
          className="progress rounded-pill"
          style={{ height: "2.5rem", backgroundColor: "transparent" }}
        >
          <motion.div
            className="progress-bar bg-cta rounded-pill"
            initial={{ width: "0%" }} // Start from 0%
            animate={controls} // Animate to the final width
            transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
            style={{ display: "flex", alignItems: "center" }}
          >
            <motion.span
              className="fs-5"
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ delay: 1, duration: 0.5 }} // Delay and fade in
            >
              {value}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Skillset = () => {
  return (
    <div>
      <Progressbars name="Bootstrap" value="100%" />
      <Progressbars name="React" value="95%" />
      <Progressbars name="JS" value="90%" />
      <Progressbars name="Git" value="88%" />
      <Progressbars name="TailwindCSS" value="85%" />
    </div>
  );
};

export default Skillset;
