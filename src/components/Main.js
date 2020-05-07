import React from "react";
import "../styles/layouts/Main.scss";

const Main = (props) => (
  <>
    <div className="main">
      <section className="section">
        <p className="sectionTitle">about me</p>
      </section>
      <section className="section">
        <p className="sectionTitle">skills</p>
      </section>
      <section className="section">
        <p className="sectionTitle">courses/events</p>
      </section>
      <section className="section">
        <p className="sectionTitle">projects</p>
      </section>
      <section className="section">
        <p className="sectionTitle">contact</p>
      </section>
    </div>
  </>
);

export default Main;
