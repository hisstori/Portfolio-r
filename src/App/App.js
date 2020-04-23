import React from "react";
import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default App;
