import React, { Component } from "react";
import simon from "./simon.png";
import adv from "./adv.png";
import api from "./api.png";
// import "../App/App.js";

class Projects extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          {/* <div className="title is-parent"> */}
            <article className="tile is-child is-danger">
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
              <article className="tile is-child is-danger">
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
            <img src={adv} />
          </div>
        </div>
    );
  }
}

export default Projects;
