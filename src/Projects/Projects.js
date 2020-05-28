import React, { Component } from "react";
import simon from "./simon.png";
import adv from "./adv.png";
import api from "./api.png";
// import "../App/App.js";

class Projects extends Component {
  render() {
    return (
      <div className="container is-fluid page">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
          <article className="tile is-child">
            <p class="title">The Game of Simon</p>
            <p class="subtitle">
              Front-End game built with HTML, CSS & JavaScript
            </p>
            <div className="content">
              <img src={simon} />
            </div>
          </article>
          {/* </div> */}
          <div className="tile is-parent">
            <article className="tile is-child">
              <p class="title">Rest API</p>
              <p class="subtitle">
                Built out with Express, Node, Mongo DB and Mongoose.
              </p>
              <div className="content">
                <img src={api} />
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p class="title">Adventures in Python</p>
            <p class="subtitle">
              Command Line Interface game built with Python, PostgreSQL, &
              PeeWee.
            </p>
            <div className="content">
              <img src={adv} />
            </div>
          </article>
        </div>
        </div>
      </div>
    );
  }
}

export default Projects;
