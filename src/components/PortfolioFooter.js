const PortfolioFooter = (skills) => {
  return (
    <div className="row gap-3 card-footer border-0 bg-transparent mx-5 mt-0 mb-3">
      <button className="btn col rounded-pill ff-secondary fw-bolder language me-3">
        <span>{skills.lang1}</span>
      </button>
      <button className="btn col rounded-pill ff-secondary fw-bolder language me-3">
        <span>{skills.lang2}</span>
      </button>
      <button className="btn col rounded-pill ff-secondary fw-bolder language me-3">
        <span>{skills.lang3}</span>
      </button>
    </div>
  );
};

export default PortfolioFooter;
