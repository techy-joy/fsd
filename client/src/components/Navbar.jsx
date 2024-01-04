import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow bg-primary fixed-top">
        <div className="container">
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
                <NavLink className="nav-link active fs-4 text-white" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link active ms-4 fs-4 text-white" aria-current="page" to="/shelf">
                  Appointments
                </NavLink>
              </li>
            </ul>
            <a className="navbar-brand fw-bolder fs-4 mx-auto text-white" href="#">
              DERMAT-CLINIC&nbsp;
              <i className="fa fa-user-md" aria-hidden="true"></i>
            </a>
            <NavLink to="/login" className="btn btn-outline-light ms-auto px-4 rounded-pill">
              <i className="fa fa-sign-in me-2"></i>Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-light ms-3 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i>Sign Up
            </NavLink>
            <NavLink to="/logout" className="btn btn-outline-light ms-3 px-4 rounded-pill">
              <i className="fa fa-sign-out me-2"></i>Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
