import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.png" className='img img-fluid' alt="Quad Tech Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <Link className="cta-button" to="/contact">
                Let's Talk
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}