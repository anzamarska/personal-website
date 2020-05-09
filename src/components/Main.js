import React from "react";
import "../styles/layouts/Main.scss";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Courses from "./Main/Courses";
import Skills from "./Main/Skills";
import Projects from "./Main/Projects";

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
