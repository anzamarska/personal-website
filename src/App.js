import React from "react";
import "./App.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  changeHamburgerClass = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("hamburger--active");
  };

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

  render() {
    return (
      <div className="App">
        <Header
          changeHamburgerClass={this.changeHamburgerClass}
          scrollingViewAbout={this.scrollingViewAbout}
          scrollingViewContact={this.scrollingViewContact}
          scrollingViewCourses={this.scrollingViewCourses}
          scrollingViewProjects={this.scrollingViewProjects}
          scrollingViewSkills={this.scrollingViewSkills}
        />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
