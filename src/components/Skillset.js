const Progressbars = (skill) => {
  return (
    <div className="row p-2 pt-3">
      <div className="col-sm-4">
        <h3 className="p-2">{skill.name}</h3>
      </div>
      <div className="col-sm-8">
        <div className="progress rounded-pill">
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
      {/* <Progressbars name='HTML' value='100%'/> */}
      <Progressbars name="React" value="90%" />
      <Progressbars name="CSS" value="90%" />
      <Progressbars name="JS" value="88%" />
      <Progressbars name="Node" value="75%" />
    </div>
  );
};

export default Skillset;
