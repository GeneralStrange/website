import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-success">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          alt=""
          loading="lazy"
          className="m-1"
        />
        GeneralStrange's Domain
      </a>
    </nav>
  );
};

export default NavBar;
