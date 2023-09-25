import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <div>
          <h1>
            <a href="/">
              <img
                className="navLogo"
                src="/images/Black White Minimalist Logo.jpg"
                alt="logo"
              />
            </a>
          </h1>
        </div>
        <div className="navBarButtonDiv">
          <nav>
            <ul className="navLinks">
              <li className="navBarButtons">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
