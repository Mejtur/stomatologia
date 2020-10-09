import React from "react";
import "../css/Sidebar.css";
import { GrClose } from "react-icons/gr";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className={isSidebarOpen ? "sidebar" : "sidebar hide"}>
      <GrClose
        onClick={() => {
          setIsSidebarOpen(false);
        }}
        className="sidebar__close"
      />
      <div className="sidebar__textContainer">
        <p className="sidebar__text">USŁUGI</p>
        <p className="sidebar__text">W CZYM POMOC</p>
        <p className="sidebar__text">O NAS</p>
        <p className="sidebar__text">CENNIK</p>
        <p className="sidebar__text">KONTAKT</p>
      </div>
    </div>
  );
}

export default Sidebar;
