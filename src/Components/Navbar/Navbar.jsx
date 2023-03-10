import React from "react";
import { Link } from 'react-router-dom';
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
                <Link to="/HomePage" style={{ textDecoration: "none" }}><a className="nav-link active" aria-current="page" >
                  Home
                </a></Link>

              </li>
              <li className="nav-item">
                <Link to="/About" style={{ textDecoration: "none" }}><a className="nav-link">
                  About
                </a></Link>

              </li>
              <li className="nav-item">
                <Link to="/Services" style={{ textDecoration: "none" }}><a className="nav-link" >
                  Services
                </a></Link>

              </li>
              <li className="nav-item">
                <Link to="/Contact" style={{ textDecoration: "none" }}><a className="nav-link" >
                  Feedback
                </a></Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
