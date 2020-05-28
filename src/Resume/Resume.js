import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../App/App";
import resume from "./resume.png";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <img src={resume} />
      </div>
    )
  }
}

export default Resume;
