import React from "react";
import "../../styles/layouts/Main.scss";

const Courses = (props) => (
  <>
    <section className="section" id="courses">
      <p className="sectionTitle">courses</p>
      <div className="content">
        <p className="gitText">ACADEMIC EDUCATION</p>
        <ul>
          Jagiellonian University in Cracov Faculty of Philosophy, Masters of
          Science in Clinical Psychology - Graduated in 2019{" "}
        </ul>
        <p className="gitText">now</p>
        <ul>
          {" "}
          I am a trainee participant - Morgan Chase Software Engineering Virtual
          Experience
        </ul>

        <p className="gitText">Conference that I take part in</p>
        <ul>Lambda Days 13-14 FEBRUARY 2020 </ul>
        <p className="gitText">Workshops</p>
        <ul>Workshops on frontend programming Codecool 20 FEBRUARY 2020</ul>

        <ul>
          Froncik - basics of creating pages in HTML and CSS 13 FEBRUARY 2020
        </ul>
        <ul>An Ounce of Elixir 12 FEBRUARY 2020</ul>
        <p className="gitText">courses</p>
        <ul>React Challenge in 10 days 1 - 16 APRIL 2020</ul>
        <ul>
          freecodecamp: Responsive Web Design Certification 12 JANUARY - 5
          FEBRUARY 2020
        </ul>

        {/* member, Psychodietics Section of the applied Psychology Departmen */}
        {/* member, AZS UJ Swimming Team */}
      </div>
    </section>
  </>
);

export default Courses;
