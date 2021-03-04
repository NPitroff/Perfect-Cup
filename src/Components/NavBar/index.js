import React from "react";
import "../../style.css";

const Navbar = ({ setShowHome }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        borderBottom: "#282c34 solid 1px",
        paddingBottom: "70px",
        paddingTop: "50px"
      }}
    >
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
      <div id="navbarNav">
        <ul className="nav navbar-nav navbar-center">
          <li>
            <img
              src="https://i.ibb.co/0qPgdyW/Brew-it-slogan.png"
              alt="logo"
              onClick={() => setShowHome(true)}
            />
          </li>
          <li className="nav-item">
            <h6 className="nav-link" onClick={() => setShowHome(false)}>
              About
            </h6>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
