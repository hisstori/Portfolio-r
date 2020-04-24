import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Projects from "../Projects/Projects";
import Landing from "../Landing/Landing";
// import Resume from "./Resume";

import { Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    // function App (){
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <p>Check out my Projects, click the image!</p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/ryan-brown-71b34210b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="https://github.com/hisstori"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <Link to="/projects"> 
          Projects</Link>
        </header>
      {/* </div> */}
      <Route path="/" exact component = {Landing} />
      <Route path="/projects" component = {Projects} />
      </div>
    );
  }
}

export default App;
