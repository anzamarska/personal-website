import React from "react";
import "../../styles/layouts/Main.scss";

const About = (props) => (
  <>
    <section className="section" id="about">
      <p className="sectionTitle">about me</p>
      <div className="content">
        <div className="aboutText">
          <h3 className="contentTitle">Hello!</h3>
          <h4>Junior Frontend Developer looking for a first job</h4>
          <p>
            I am a psychologist who during career had the opportunity to recruit
            people for Information Technology positions. The more I learned
            about this industry, the more I wanted to become part of it. Since
            October 2018, I have been learning independently basics of
            programming.
          </p>
        </div>
        <img className="profileImg" src="profile.JPG" alt="profile" />
      </div>
    </section>
  </>
);

export default About;
