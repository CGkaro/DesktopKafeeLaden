import React, { Component } from "react";
import { Button, Input, Icon } from "react-materialize";
import { connect } from "react-redux";
import { editFoods } from "../../../store/actions/FoodActions";
import { storage } from "../../../config/fbConfig";
import UploadImage from "../../layout/UploadImage";

class EditFoods extends Component {
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
    this.props.editFoods(this.state);
    this.setState({
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
      Id: this.props.data,
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
    return (
      <div>
        <div>
          <Button
            s={2}
            modal="close"
            waves="light"
            className="red darken-2"
            onClick={this.handleSubmit}
          >
            Edit
          </Button>
          <Button s={2} flat modal="close" waves="light">
            Close
          </Button>
        </div>

        <Input
          label="Food Name"
          id="Name"
          value={this.state.Name}
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>

        <Input
          label="Food Image"
          id="Image"
          validate
          value={this.state.Image}
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
          label="Food Description"
          id="Description"
          value={this.state.Description}
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

        <Input
          id="MenuId"
          s={12}
          type="select"
          label="MenuId"
          onChange={this.handleChange}
        >
          <option disabled>Choose your option</option>
          <option value="">Default</option>
          {this.props.category.map(item => {
            return <option value={item.Id}>{item.Id}</option>;
          })}
        </Input>

        <Input
          label="Food Price"
          id="Price"
          value={this.state.Price}
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editFoods: category => dispatch(editFoods(category))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditFoods);
