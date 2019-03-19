import React, { Component } from "react";
import { Button, Input, Icon } from "react-materialize";
import { connect } from "react-redux";
import { editFoods } from "../../../store/actions/FoodActions";

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
