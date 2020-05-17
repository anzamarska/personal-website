import React from "react";
import "../styles/layouts/Header.scss";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";

const Header = (props) => (
  <>
    <div className="header">
      <button
        className="hamburger"
        onClick={() => props.changeHamburgerNavClass()}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className="navigation">
        <Roll bottom>
          <button
            className="button"
            onClick={() => {
              props.changeHamburgerNavClass();
              props.scrollingViewAbout();
            }}
          >
            about
          </button>
        </Roll>
        <Bounce right>
          <button
            className="button"
            onClick={() => {
              props.changeHamburgerNavClass();
              props.scrollingViewSkills();
            }}
          >
            skills
          </button>
        </Bounce>
        <Bounce bottom>
          <button
            className="button"
            onClick={() => {
              props.changeHamburgerNavClass();
              props.scrollingViewCourses();
            }}
          >
            courses/events
          </button>
        </Bounce>
        <Roll left>
          <button
            className="button"
            onClick={() => {
              props.changeHamburgerNavClass();
              props.scrollingViewProjects();
            }}
          >
            projects
          </button>
        </Roll>
        <Bounce left>
          <button
            className="button"
            onClick={() => {
              props.changeHamburgerNavClass();
              props.scrollingViewContact();
            }}
          >
            contact
          </button>
        </Bounce>
      </div>
    </div>
  </>
);

export default Header;
