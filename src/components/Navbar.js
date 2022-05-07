import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [buttonColor, setButtonColor] = useState({
    home: "white",
    projects: "white",
    aboutMe: "white",
    experience: "white",
    socials: "white",
  });
  return (
    <div className="navbar">
      <button
        type="button"
        className="navbar_home"
        id="navbar_button"
        // onClick={() => {
        //   setButtonColor("Black");
        // }}
        // style={{ color: buttonColor }}
      >
        <Link
          to="/"
          id="navbar_button"
          // onClick={() => {
          //   setButtonColor(
          //     ((buttonColor.home = "black"),
          //     (buttonColor.projects = "white"),
          //     (buttonColor.aboutMe = "white"),
          //     (buttonColor.experience = "white"),
          //     (buttonColor.socials = "white"))
          //   );
          // }}
          // style={{ color: buttonColor.home }}
        >
          Home
        </Link>
      </button>
      <button type="button" className="navbar_projects" id="navbar_button">
        <Link
          to="/projects"
          id="navbar_button"
          // onClick={() => {
          //   setButtonColor(
          //     ((buttonColor.home = "white"),
          //     (buttonColor.projects = "black"),
          //     (buttonColor.aboutMe = "white"),
          //     (buttonColor.experience = "white"),
          //     (buttonColor.socials = "white"))
          //   );
          // }}
          // style={{ color: buttonColor.projects }}
        >
          Projects
        </Link>
      </button>
      <button type="button" className="navbar_about" id="navbar_button">
        <Link
          to="/about"
          id="navbar_button"
          // onClick={() => {
          //   setButtonColor(
          //     (buttonColor.home = "white"),
          //     (buttonColor.projects = "white"),
          //     (buttonColor.aboutMe = "black"),
          //     (buttonColor.experience = "white"),
          //     (buttonColor.socials = "white")
          //   );
          // }}
          // style={{ color: buttonColor.aboutMe }}
        >
          About Me
        </Link>
      </button>
      <button type="button" className="navbar_experience" id="navbar_button">
        <Link
          to="/experience"
          id="navbar_button"
          // onClick={() => {
          //   setButtonColor(
          //     (buttonColor.home = "white"),
          //     (buttonColor.projects = "white"),
          //     (buttonColor.aboutMe = "white"),
          //     (buttonColor.experience = "black"),
          //     (buttonColor.socials = "white")
          //   );
          // }}
          // style={{ color: buttonColor.experience }}
        >
          Experience
        </Link>
      </button>
      <button type="button" className="navbar_contact" id="navbar_button">
        <Link
          to="/socials"
          id="navbar_button"
          // onClick={() => {
          //   setButtonColor(
          //     (buttonColor.home = "White"),
          //     (buttonColor.projects = "White"),
          //     (buttonColor.aboutMe = "White"),
          //     (buttonColor.experience = "White"),
          //     (buttonColor.socials = "Black")
          //   );
          // }}
          // style={{ color: buttonColor.socials }}
        >
          Socials
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
