const PortfolioBody = (props) => {
  return (
    <div className="card-body mx-2">
      <h2 className="fw-bolder">{props.heading}</h2>
      <p className="fs-5 opacity-75">{props.paragraph}</p>
    </div>
  );
};

export default PortfolioBody;
