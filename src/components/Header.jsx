// Header.jsx
import React from "react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-2">
      <button className="btn btn-dark" id="menu-toggle" onClick={toggleSidebar}>
        <i className={`fas fa-chevron-${isSidebarOpen ? "left" : "right"}`}></i>
      </button>
    </nav>
  );
};

export default Header;
