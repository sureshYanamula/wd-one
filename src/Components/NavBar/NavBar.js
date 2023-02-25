import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" style={{ color: "white" }}>
          Navbar
        </span>
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
              <span className="nav-link active" aria-current="page">
                <NavLink to="/">Home</NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/properties">Properties</NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/forms">Forms</NavLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
