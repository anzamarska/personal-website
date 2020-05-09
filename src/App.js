import React from "react";
import "./App.css";
// import React, { Component } from "react";
import "./App.css";
// // import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: "",
  //   };
  // }

  scrollingViewAbout = (e) => {
    var elem = document.getElementById("about");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  scrollingViewContact = (e) => {
    var elem = document.getElementById("contact");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  scrollingViewCourses = (e) => {
    var elem = document.getElementById("courses");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  scrollingViewProjects = (e) => {
    var elem = document.getElementById("projects");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  scrollingViewSkills = (e) => {
    var elem = document.getElementById("skills");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  // setStateContact = () => {
  //   this.setState({ id: "to na co chce zmienic" });
  //   console.log("id state", this.state);
  // };

  render() {
    return (
      <div className="App">
        <Header
          // setStateContact={this.setStateContact}
          scrollingViewAbout={this.scrollingViewAbout}
          scrollingViewContact={this.scrollingViewContact}
          scrollingViewCourses={this.scrollingViewCourses}
          scrollingViewProjects={this.scrollingViewProjects}
          scrollingViewSkills={this.scrollingViewSkills}
        />
        <Main />
        <Footer />
        {/* <div id="content"></div> */}
      </div>
    );
  }
}

export default App;
