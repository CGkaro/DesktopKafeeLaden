import React, { Component } from "react";
import { Button, Modal, Icon, Input, Row } from "react-materialize";
import { connect } from "react-redux";
import { createFood } from "../../../store/actions/FoodActions";
import UploadImage from "../../layout/UploadImage";
import { storage } from "../../../config/fbConfig";

class CreateFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Name: "",
      Image: "",
      Description: "",
      Discount: "",
      MenuId: "",
      Price: "",
      Url: null,
      Progress: null
    };
    this.handleUploadChange = this.handleChangeUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createFood(this.state);
    this.setState({
      Id: "",
      Name: "",
      Image: "",
      Description: "",
      Discount: "",
      MenuId: "",
      Price: ""
    });
  };
  handleChange = e => {
    this.setState({
      Id: this.props.id,
      [e.target.id]: e.target.value
    });
  };
  handleUpload = e => {
    const { Url } = this.state;

    let uploadTask = storage.ref(`Images/${Url.name}`).put(Url);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        this.setState({
          Progress: progress
        });
      },
      error => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          this.setState({
            Image: downloadURL
          });
        });
      }
    );
  };
  handleChangeUpload = e => {
    console.log(e);

    this.setState({
      Url: e.target.files[0]
    });
  };

  render() {
    const style = {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed"
    };
    const ident = this.props.id;
    if (ident === "" || undefined || null) {
      // eslint-disable-next-line no-const-assign
      ident = 1;
    }
    console.log("ident", ident);
    return (
      <Modal
        trigger={
          <Button floating icon="add" className="red" large style={style}>
            <Button floating icon="insert_chart" className="red" />
          </Button>
        }
      >
        <div>
          <Button
            s={2}
            modal="close"
            waves="light"
            className="red darken-2"
            onClick={this.handleSubmit}
          >
            Create
          </Button>
          <Button s={2} flat modal="close" waves="light">
            Close
          </Button>
        </div>

        <Input
          label="Food name"
          id="Name"
          value={this.state.Name}
          validate
          val
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food Description"
          value={this.state.Description}
          id="Description"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food Discount"
          id="Discount"
          value={this.state.Discount}
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>

        <Row>
          <Input
            id="MenuId"
            s={12}
            type="select"
            label="Food MenuId"
            defaultValue=""
            onChange={this.handleChange}
          >
            <option disabled>Choose your option</option>
            <option value="">Default</option>
            {this.props.category.map(item => {
              return <option value={item.Id}>{item.Id}</option>;
            })}
          </Input>
        </Row>

        <Input
          label="Food Price"
          id="Price"
          value={this.state.Price}
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>

        <UploadImage
          changeUpload={this.handleUpload}
          handleChangeUpload={this.handleChangeUpload}
          progress={this.state.Progress}
        />

        <Input
          label="Or you can post image hosting site"
          id="Image"
          validate
          value={this.state.Image}
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createFood: category => dispatch(createFood(category))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateFood);
