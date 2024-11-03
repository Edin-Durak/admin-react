import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BrojSJ from "./pages/BrojSJ"; // Import your new page
import VrstaSJ from "./pages/VrstaSJ";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("home"); // Track the selected section

  // Function to toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to render content based on the selected section
  const renderContent = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "brojSJ":
        return <BrojSJ />; // Render BrojSJ page
      case "facilities":
        return <VrstaSJ />;
      case "bookings":
        return <h1>Bookings Content</h1>;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`d-flex ${isSidebarOpen ? "" : "toggled"}`} id="wrapper">
      <Sidebar onSectionChange={setCurrentSection} />{" "}
      {/* Pass section change handler */}
      <div id="page-content-wrapper">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main
          className={`container-fluid ${
            currentSection === "home" ? "home" : ""
          }`}
        >
          <div className="container-fluid">
            {renderContent()}{" "}
            {/* Dynamically render content based on the section */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
