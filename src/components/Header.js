import React from "react";
import "../styles/layouts/Header.scss";

const Header = (props) => (
  <>
    <div className="header">
      <button className="button" onClick={props.scrollingViewContact}>
        contact
      </button>
      <button className="button" onClick={props.scrollingViewProjects}>
        projects
      </button>
      <button className="button" onClick={props.scrollingViewCourses}>
        courses/events
      </button>
      <button className="button" onClick={props.scrollingViewSkills}>
        skills
      </button>
      <button className="button" onClick={props.scrollingViewAbout}>
        about
      </button>
    </div>
  </>
);

export default Header;
