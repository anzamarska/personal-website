import React from "react";
import "../../styles/layouts/Main.scss";

const Projects = (props) => (
  <>
    <section className="section" id="projects">
      <p className="sectionTitle">projects</p>
      <div className="content">
        <p>
          Here you can find some of my projects. <br /> Not all of them are
          fully implemented, despite of that I hope you will still like them!
        </p>
        <div className="projectDiv">
          <h3 className="contentTitle">Wallpapers Aplication</h3>
          <p>
            It is an application that allows the user to choose a category
            according to the app will be offered the most beautiful wallpapers
            on the internet we can find.
          </p>
          <p className="gitText">code</p>
          <img className="gitHubIcon" src="github.svg" alt="github" />
          <p className="gitText">demo</p>
          <div className="demoDiv">there will be screen of app</div>
          <h6>CSS (Sass) | HTML | JavaScript | React | API</h6>
        </div>
        <div className="projectDiv">
          <h3 className="contentTitle">Home Pantry</h3>
          <p>
            Have you had situations where, while shopping, you didn't know how
            much stuff you have at home, and how much should you buy? This app
            will help you be above this problem!
          </p>
          <p className="gitText">code</p>
          <img className="gitHubIcon" src="github.svg" alt="github" />
          <p className="gitText">demo</p>
          <div className="demoDiv">there will be screen of app</div>
          <h6>CSS (Sass) | HTML | JavaScript | React </h6>
        </div>
        <div className="projectDiv">
          <h3 className="contentTitle">Memory Game</h3>
          <p>
            The first application I wrote with the help of React. Created
            together with another Frontend Developer so that I could improve my
            ability to work with Git Hub.
          </p>
          <p className="gitText">code</p>
          <img className="gitHubIcon" src="github.svg" alt="github" />
          <p className="gitText">demo</p>
          <div className="demoDiv">there will be screen of app</div>
          <h6>CSS | HTML | JavaScript | React </h6>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
