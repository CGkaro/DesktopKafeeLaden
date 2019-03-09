import React, { Component } from "react";
import { Button, Modal, Icon, Input } from "react-materialize";
import { connect } from "react-redux";
import { createFood } from "../../store/actions/FoodActions";

class CreateFood extends Component {
  state = {
    Name: "",
    Image: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createFood(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
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
            Add
          </Button>
          <Button s={2} flat modal="close" waves="light">
            Close
          </Button>
        </div>
        <Input label="Id" id="Id" validate onChange={this.handleChange} />
        <Input
          label="Food name"
          id="Name"
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

        <Input type="file" label="File" placeholder="Upload Image" />

        <Input
          label="Or you can post image hosting site"
          id="Image"
          validate
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
