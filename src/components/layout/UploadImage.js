import React, { Component } from "react";
import { Button, Input, Row } from "react-materialize";
import ProgressBar from "react-materialize/lib/ProgressBar";
export default class UploadImage extends Component {
  render() {
    return (
      <div>
        <ProgressBar progress={this.props.progress} />
        <Row>
          <Input
            s={10}
            id="Url"
            type="file"
            label="File"
            placeholder="Upload Image"
            onChange={this.props.handleChangeUpload}
          />
          <Button s={2} waves onClick={this.props.changeUpload}>
            Upload
          </Button>
        </Row>
      </div>
    );
  }
}
