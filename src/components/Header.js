import React from "react";
import "../styles/layouts/Header.scss";

const Header = (props) => (
  <>
    <div className="header">
      <button className="button">contact</button>
      <button className="button">projects</button>
      <button className="button">courses/events</button>
      <button className="button">skills</button>
      <button className="button">about</button>
    </div>
  </>
);

export default Header;
