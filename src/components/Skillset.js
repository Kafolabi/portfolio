import { motion } from "framer-motion";

const SkillBar = ({ name, value, percentage }) => {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold text-primary-color">{name}</span>
        <span className="text-secondary">{percentage}</span>
      </div>
      <div
        className="progress"
        style={{ height: "10px", backgroundColor: "var(--bg-secondary)" }}
      >
        <motion.div
          className="progress-bar rounded-pill"
          style={{ backgroundColor: "var(--accent-color)" }}
          initial={{ width: 0 }}
          whileInView={{ width: value }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skillset = () => {
  const skills = [
    { name: "Bootstrap", value: "100%", percentage: "100%" },
    { name: "React", value: "95%", percentage: "95%" },
    { name: "JavaScript (ES6+)", value: "90%", percentage: "90%" },
    { name: "Git & GitHub", value: "88%", percentage: "88%" },
    { name: "Tailwind CSS", value: "85%", percentage: "85%" },
    { name: "Node.js", value: "70%", percentage: "70%" },
  ];

  return (
    <div className="row">
      {skills.map((skill, index) => (
        <div className="col-md-6" key={index}>
          <SkillBar {...skill} />
        </div>
      ))}
      <style jsx>{`
        .text-primary-color {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default Skillset;
