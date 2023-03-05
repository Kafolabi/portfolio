import Brand from "./Brand";

const Navigation = () => {
  return (
  <div className="pb-5 ff-secondary">
  <nav className="fs-5 fw-light navbar navbar-expand-md p-4 ps-5 mb-5 fixed-top">
   {window.screen.width < 768 && <Brand />}
    <button
        className="navbar-toggler navbar-toggler-icon"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
          >
            <i className="fa-solid fa-bars"></i>
    </button>
    <div
      className="collapse navbar-collapse"
      id="collapsibleNavbar"
    >
        <ul className="navbar-nav ms-auto pe-4 ps-4">
        <li className="nav-item pe-3">
            <a className="d-inline-block position-relative nav-link nav-toggler pb-3" role="button" href="#">
            <span className="text-color-light text-center">01. </span>{'<about>'}
            </a>
          </li>
          <li className="nav-item pe-3">
            <a className="d-inline-block position-relative nav-link nav-toggler pt-2 pb-3" role="button" href="#">
            <span className="text-color-light">02. </span>{'<skills>'}
            </a>
          </li>
          <li className="nav-item pe-3">
            <a className="d-inline-block position-relative nav-link nav-toggler pb-3" href="#">
            <span className="text-color-light">03. </span>{'<portfolio>'}
            </a>
          </li>
          <li className="nav-item pe-3">
            <a className="d-inline-block position-relative nav-link nav-toggler pb-3" href="#">
            <span className="text-color-light">04. </span>{'<career>'}
            </a>
          </li>
          <li className="nav-item pe-3">
            <a className="nav-link nav-toggler d-inline-block position-relative" href="#">
            <span className="text-color-light">05. </span>{'<contact>'}
            </a>
          </li>
          </ul>
        </div>
</nav>
</div>
  );
}

export default Navigation;