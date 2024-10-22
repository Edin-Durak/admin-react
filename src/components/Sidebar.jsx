import React, { useState, useEffect } from "react";
import "../css/sidebar.css";
import "../css/main.css";
const Sidebar = ({ onSectionChange }) => {
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
    <div className="d-flex" id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
        {/* Sidebar Heading with Dropdown */}
        <div className="sidebar-heading d-flex align-items-center justify-content-between">
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

        {/* Navigation Menu */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark"
              onClick={() => onSectionChange("home")}
              aria-label="Home"
            >
              <i className="fas fa-home"></i>
              <span> Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark"
              onClick={() => onSectionChange("brojSJ")}
              aria-label="brojSJ"
            >
              <i className="fas fa-campground"></i>
              <span> brojSJ</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark"
              onClick={() => onSectionChange("facilities")}
              aria-label="Facilities"
            >
              <i className="fas fa-tools"></i>
              <span> Facilities</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-dark"
              onClick={() => onSectionChange("bookings")}
              aria-label="Bookings"
            >
              <i className="fas fa-calendar-alt"></i>
              <span> Bookings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
