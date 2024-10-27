// Header.jsx
import React, { useState, useEffect } from "react";
import "../css/header.css";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [selectedCamp, setSelectedCamp] = useState(""); // Initially empty
  const [camps, setCamps] = useState(["Camp A", "Camp B", "Camp C"]); // Placeholder camp names

  // Automatically select the first camp if there's only one or set the default to the first camp
  useEffect(() => {
    if (camps.length === 1) {
      setSelectedCamp(camps[0]);
    } else if (camps.length > 1 && !selectedCamp) {
      setSelectedCamp(camps[0]); // Set the first camp as default
    }
  }, [camps, selectedCamp]);

  const handleCampChange = (campName) => {
    setSelectedCamp(campName);
  };

  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light p-2">
      <button
        className="btn btn-primary"
        id="menu-toggle"
        onClick={toggleSidebar}
      >
        <i className={`fas fa-chevron-${isSidebarOpen ? "left" : "right"}`}></i>
      </button>

      {/* Camp Dropdown */}
      <div className="header-heading d-flex align-items-center justify-content-between">
        <h5 className="mb-0">{selectedCamp}</h5>{" "}
        {/* Always display the selected camp */}
        {/* Dropdown Toggle Button */}
        <div className="dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="campDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* Dropdown Arrow */}
          </button>
          <ul className="dropdown-menu" aria-labelledby="campDropdown">
            {camps.map((camp, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  onClick={() => handleCampChange(camp)}
                >
                  {camp}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="/" className="navbar-brand">
        <img src="/src/assets/images/logo-no-background.svg" alt="Logo" />
      </a>
    </nav>
  );
};

export default Header;
