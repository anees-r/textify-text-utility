import React from "react";
import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="../icons/icon-dark.png"
              // {`../icons/icon-${props.mode}.png`}
              alt="Textify"
              width="30"
              height="24"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  onClick={props.toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// // Set default props
// Navbar.defaultProps = {
//   title: "Empty",
// };

// // Define prop types
// Navbar.propTypes = {
//   title: PropTypes.string,
// };
