import React from "react";
import "../css/Sidebar.css";
import { GrClose } from "react-icons/gr";
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom';


function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className={isSidebarOpen ? "sidebar" : "sidebar hide"}>
      <GrClose
        onClick={() => {
          setIsSidebarOpen(false);
        }}
        className="sidebar__close"
      />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        
      <div className="sidebar__logoContainer">
        <img src={Logo} alt="sidebarLogo" className="sidebar__logo" />
        <p className="sidebar__logoText">Stomatologia</p>
      </div>
      </Link>
      <div className="sidebar__textContainer">
        <Link to="/uslugi" style={{ textDecoration: "none", color: "black" }}>
        <p className="sidebar__text">USŁUGI</p>
          
        </Link>
        <Link to="/pomoc" style={{ textDecoration: "none", color: "black" }}>
          
        <p className="sidebar__text">W CZYM POMOC</p>
        </Link>
        <Link to="/o_nas" style={{ textDecoration: "none", color: "black" }}>
        <p className="sidebar__text">O NAS</p>
          
        </Link>
        <Link to="/cennik" style={{ textDecoration: "none", color: "black" }}>
          
        <p className="sidebar__text">CENNIK</p>
        </Link>
        <Link to="/kontakt" style={{ textDecoration: "none", color: "black" }}>
          
        <p className="sidebar__text">KONTAKT</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
