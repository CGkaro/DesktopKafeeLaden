import React, { Component } from "react";
import { Button, Modal, Icon, Input, Row } from "react-materialize";
import { connect } from "react-redux";
import { createFood } from "../../../store/actions/FoodActions";

class CreateFood extends Component {
  state = {
    Id: "",
    Name: "",
    Image: "",
    Description: "",
    Discount: "",
    MenuId: "",
    Price: ""
  };
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
    if (ident == "" || undefined || null) {
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

        <Input type="file" label="File" placeholder="Upload Image" />

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
