// Sidebar.jsx
import React from "react";
import "../css/sidebar.css";
import "../css/main.css";

const Sidebar = ({ onSectionChange }) => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
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
              <span> Smještajne jedinice</span>
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
              <span> Vrste smještajnih jedinica</span>
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
