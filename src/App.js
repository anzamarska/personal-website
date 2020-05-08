import React from "react";
import "./App.css";
// import React, { Component } from "react";
import "./App.css";
// // import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
