import React from "react";
import About from "./About";
import Socials from "./Social";
import Projects from "./Projects";
import Experience from "./Experience";
import Home from "./Home";
// import Error from "./Error";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function index() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* --------------------------------- */}
        <Route exact path="/projects" element={<Projects />} />
        {/* ---------------------------------- */}
        <Route exact path="/about" element={<About />} />
        {/* ---------------------------------- */}
        <Route exact path="/experience" element={<Experience />} />
        {/* ---------------------------------- */}
        <Route exact path="/socials" element={<Socials />} />
        {/* ---------------------------------- */}
        {/* <Route exact path="*" element={<Error />} /> */}
        {/* ---------------------------------- */}
      </Routes>
    </Router>
  );
}

export default index;
