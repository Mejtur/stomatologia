import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

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
      <div className="navbar__logoContainer">
        <img src={Logo} alt="navbarLogo" className="navbar__logo" />
        <p className="navbar__logoText">Stomatologia</p>
      </div>
      <div className="navbar__textContainer">
        <p className="navbar__text">USŁUGI</p>
        <p className="navbar__text">W CZYM POMOC</p>
        <p className="navbar__text">O NAS</p>
        <p className="navbar__text">CENNIK</p>
        <p className="navbar__text">KONTAKT</p>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}

export default Navbar;
