import React from "react";
import "../styles/layouts/Main.scss";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Courses from "./Main/Courses";
import Skills from "./Main/Skills";
import Projects from "./Main/Projects";
import Fade from "react-reveal/Fade";

const Main = (props) => (
  <>
    <div className="main">
      <Fade bottom>
        <About />
        <Skills />
        <Courses />
        <Projects />
        <Contact />
      </Fade>
    </div>
  </>
);

export default Main;
