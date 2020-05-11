import React from "react";
import "../../styles/layouts/Main.scss";

const Skills = (props) => (
  <>
    <section className="section" id="skills">
      <p className="sectionTitle">skills</p>
      <div className="content">
        <p className="gitText">CORE SKILLS </p>
        <div className="">
          <img className="skillsIcon" src="html5.svg" alt="" />
          <p>html</p>
          <img className="skillsIcon" src="css3.svg" alt="" />
          <p>css</p>
          <img className="skillsIcon" src="sass.svg" alt="" />
          <p>sass</p>
          <img className="skillsIcon" src="js.svg" alt="" />
          <p>java script</p>
          <img className="skillsIcon" src="react.svg" alt="" />
          <p>react</p>
          <img className="skillsIcon" src="nodejs.svg" alt="" />
          <p>node.js</p>
          <img className="skillsIcon" src="npm.svg" alt="" />
          <p>npm</p>
          <img className="skillsIcon" src="slack.svg" alt="" />
          <p>slack</p>
          <img className="skillsIcon" src="git.svg" alt="" />
          <p>git</p>
        </div>
        <ul>Basic knowledge of Python</ul>
        <ul>Knowledge of IBM SPSS and STATISTICA </ul>
        <ul>Critical thinking and complex problem-solving skills</ul>
        <ul>Extensive active listening and communication skills </ul>
        <p className="gitText">Languages</p>
        <ul>English C1 </ul>
        <ul>German B1 </ul>
        <ul>Polish native</ul>
      </div>
    </section>
  </>
);

export default Skills;
