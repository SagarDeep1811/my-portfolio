import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <button type="button" className="navbar_projects" id="navbar_button">
        Projects
      </button>
      <button type="button" className="navbar_about" id="navbar_button">
        About
      </button>
      <button type="button" className="navbar_experience" id="navbar_button">
        Experience
      </button>
      <button type="button" className="navbar_contact" id="navbar_button">
        Socials
      </button>
    </div>
  );
}

export default Navbar;
