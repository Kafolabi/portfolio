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
          style={{ backgroundColor: "var(--accent-color)", height: "100%" }}
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
    { name: "React", value: "100%", percentage: "95%" },
    { name: "Nextjs", value: "80%", percentage: "80%" },
    { name: "Typescript", value: "85%", percentage: "85%" },
    { name: "Git & GitHub", value: "88%", percentage: "88%" },
    { name: "Tailwind CSS", value: "85%", percentage: "85%" },
    { name: "ChakraUI", value: "70%", percentage: "70%" },
    { name: "Supabase", value: "95%", percentage: "95%" },
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
