const Navigation = () => {
  return (
    <header className="pb-5 ff-secondary">
      <nav className="fs-5 fw-light navbar navbar-expand-sm p-4 ps-5 mb-5 fixed-top">
        <button
          class="navbar-toggler navbar-toggler-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul
            className="navbar-nav ms-auto pe-4 ps-4"
            // style={{ backgroundColor: "white" }}
            // {window.screen.width > 767 && <Social />}
            // style={window.screen.width > 767 && "backgroundColor: white"}
          >
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#"
              >
                <span className="text-color-light">01. </span>
                {"<about>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                role="button"
                href="#"
              >
                <span className="text-color-light">02. </span>
                {"<skills>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#"
              >
                <span className="text-color-light">03. </span>
                {"<portfolio>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="d-inline-block position-relative nav-link nav-toggler"
                href="#"
              >
                <span className="text-color-light">04. </span>
                {"<career>"}
              </a>
            </li>
            <li className="nav-item pe-3">
              <a
                className="nav-link nav-toggler d-inline-block position-relative"
                href="#"
              >
                <span className="text-color-light">05. </span>
                {"<contact>"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
