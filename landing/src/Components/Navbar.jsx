import React from "react";
import ".././App.css";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram-logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">Explore.</div>
        <div className="nav-links">
          <ul>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
