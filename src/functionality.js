// Basic implementation of all the functionality of this portfolio
// Powered by React 😀😀😀

// Let's go! 🚃🚃🚃

const heading = (num, text) => {
  return (
    <div>
      <span className="text-color-light fw-lighter ff-secondary">{num}</span>
      <h1
        className="ff-primary d-inline display-5 fw-bold"
        style={{ letterSpacing: "0rem" }}
      >
        {text}
      </h1>
    </div>
  );
};

export { heading };
