const Progressbars = (skill) => {
  return (
    <div className="row p-2 pt-3">
      <div className="col-sm-4">
        <h3 className="p-2">{skill.name}</h3>
      </div>
      <div className="col-sm-8">
        <div className="progress rounded-pill" style={{backgroundColor: "#f2f2f2"}}>
          <div
            className="progress-bar rounded-pill bg-cta"
            style={{ width: skill.value }}
          >
            <span className="fs-5">{skill.value}</span>
          </div>
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
