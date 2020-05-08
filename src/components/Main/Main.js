import React from "react";
import "../../styles/layouts/Main.scss";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = (props) => (
  <>
    <div className="main">
      <About />
      <Skills />
      <Courses />
      <Projects />
      <Contact />
    </div>
  </>
);

export default Main;
