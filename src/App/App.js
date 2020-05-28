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
        <div className="hero is-dark">
          <header className="hero-body header">
            <NavLink to="/">
              <img src={logo} className="App-link" alt="logo" />
            </NavLink>
            <div>
            <a
              className="App-link button is-warning is-outlined"
              href="https://www.linkedin.com/in/ryan-brown-71b34210b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            </div>
            <div>
            <a
              className="App-link button is-warning is-outlined"
              href="https://github.com/hisstori"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            </div>
            <div>
            <NavLink to="/resume"
            className="App-link button is-warning is-outlined">Resume</NavLink>
            </div>
            <div>
            <NavLink to="/projects"
            className="App-link button is-warning is-outlined">Projects</NavLink>
            </div>
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
