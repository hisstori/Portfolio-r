import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../App/App";
import resume from "../Resume/Resume";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
    state = {
      numPages: 1,
      pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages}) => {
      this.setState({ numPages });
    }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document file={resume}
        onLoadSuccess={this.DocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
  }
}

export default Resume;
