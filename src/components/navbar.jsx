import React, { Component } from "react";
import logo from "../assets/logos/logo.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} width="30" hiegh="30" alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"twitch"}>
                Twitch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
