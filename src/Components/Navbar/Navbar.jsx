import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/HomePage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;