import React from 'react';
import image from '../Constant/image';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="navbar_logo">
          <img src={image.logo} alt="app_logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto navbar-link">
            <li className="nav-item">
              <Link className="nav-link" to="/NeeD">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="navbar-nav mr-auto nav-item" id="booktable">
            <Link to="/booknow" className="nav-link" style={{color:" rgb(238, 228, 142)"}}>
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
