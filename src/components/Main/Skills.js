import React from "react";
import "../../styles/layouts/Main.scss";

const Skills = (props) => (
  <>
    <section className="section" id="skills">
      <p className="sectionTitle">skills</p>
      <div className="content">
        <div className="skillsDiv">
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/html5.svg" alt="" />
            <p className="gitText">html</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/css3.svg" alt="" />
            <p className="gitText">css</p>{" "}
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/sass.svg" alt="" />
            <p className="gitText">sass</p>{" "}
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/js.svg" alt="" />
            <p className="gitText">java script</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/react.svg" alt="" />
            <p className="gitText">react</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/nodejs.svg" alt="" />
            <p className="gitText">node.js</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/npm.svg" alt="" />
            <p className="gitText">npm</p>
          </div>
          {/* <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/slack.svg" alt="" />
            <p className="gitText">slack</p>
          </div> */}
          <div className="iconDiv">
            <img className="skillsIcon" src="skillsIcon/git.svg" alt="" />
            <p className="gitText">git</p>
          </div>
        </div>
        <div className="skillsDiv">
          <li>Basic knowledge of Python and R</li>
          <li>Knowledge of IBM SPSS and STATISTICA </li>
          <li>Critical thinking and complex problem-solving skills</li>
          <li>Extensive active listening and communication skills </li>
        </div>
        <p className="gitText">Languages</p>
        <p>English C1 </p>
        <p>German B1 </p>
        <p>Polish native</p>
      </div>
    </section>
  </>
);

export default Skills;
