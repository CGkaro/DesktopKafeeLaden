import React, { Component } from "react";
import { Modal, Button, Input, Icon } from "react-materialize";
import { connect } from "react-redux";
import { editFoods } from "../../store/actions/CategoriesActions";

class EditFoods extends Component {
  state = {
    Name: "",
    Image: "",
    Description: "",
    Discount: "",
    MenuId: "",
    Price: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editFoods(this.state);
  };
  handleChange = e => {
    this.setState({
      Id: this.props.data,
      [e.target.id]: e.target.value
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
            Add
          </Button>
          <Button s={2} flat modal="close" waves="light">
            Close
          </Button>
        </div>

        <Input
          label="Food Name"
          id="Name"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>

        <Input type="file" label="File" placeholder="Upload Image" />

        <Input
          label="Food Image"
          id="Image"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food Description"
          id="Description"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food Discount"
          id="Discount"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food MenuId"
          id="MenuId"
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          label="Food Price"
          id="Price"
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
