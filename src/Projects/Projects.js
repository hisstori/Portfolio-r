import React, { Component } from "react";
import simon from "./simon.png";
import adv from "./adv.png";
import api from "./api.png";
// import "../App/App.js";


class Projects extends Component {
    render() {
        return (
            <div>
            <div>
                <img src={simon} />
            </div>
            <div>
                <img src={api} />
            </div>
            <div>
                <img src={adv} />
            </div>
            </div>
        );
    }
}


export default Projects;