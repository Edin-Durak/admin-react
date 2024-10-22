// Header.jsx
import React from "react";
import "../css/header.css";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className=" header navbar navbar-expand-lg navbar-light bg-light  p-2">
      <button
        className="btn btn-primary"
        id="menu-toggle"
        onClick={toggleSidebar}
      >
        <i className={`fas fa-chevron-${isSidebarOpen ? "left" : "right"}`}></i>
      </button>
    </nav>
  );
};

export default Header;
