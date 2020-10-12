import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__hamburgerContainer">
        <GiHamburgerMenu
          className="navbar__hamburger"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
      </div>
      <Link to="/" style={{ textDecoration: "none", color:"black" }} className="navbar__logoContainer">
        <img src={Logo} alt="navbarLogo" className="navbar__logo" />
        <p className="navbar__logoText">Stomatologia</p>
      </Link>
      <div className="navbar__textContainer">
        <Link style={{ textDecoration: "none", color: "black" }} to="/uslugi">
          <p className="navbar__text">USŁUGI</p>  
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/pomoc">
        <p className="navbar__text">W CZYM POMOC</p>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/o_nas">
        <p className="navbar__text">O NAS</p>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cennik">
        <p className="navbar__text">CENNIK</p>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/kontakt">
        <p className="navbar__text">KONTAKT</p>
        </Link>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}

export default Navbar;
