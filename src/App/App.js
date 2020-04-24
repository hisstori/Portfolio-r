import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import Projects from "../Projects/Projects";
import Landing from "../Landing/Landing";
import Resume from "../Resume/Resume";

import { Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    // function App (){
    return (
        <div className="App">
          <header className="App-header">
            <NavLink to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
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
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </header>
          {/* </div> */}
          <div>
            
          </div>
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </div>
        </div>
    );
  }
}

export default App;
