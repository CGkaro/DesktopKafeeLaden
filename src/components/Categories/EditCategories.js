import React, { Component } from "react";
import { Button, Input, Icon } from "react-materialize";
import { connect } from "react-redux";
import { editCategory } from "../../store/actions/CategoriesActions";

class EditCategories extends Component {
  state = {
    Name: "",
    Image: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editCategory(this.state);
    this.setState({
      Name: "",
      Image: ""
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
            Add
          </Button>
          <Button s={2} flat modal="close" waves="light">
            Close
          </Button>
        </div>

        <Input
          label="Category name"
          id="Name"
          value={this.state.Name}
          validate
          onChange={this.handleChange}
        >
          <Icon>account_circle</Icon>
        </Input>

        <Input type="file" label="File" placeholder="Upload Image" />

        <Input
          label="Or you can post hosting site"
          id="Image"
          value={this.state.Image}
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
    editCategory: category => dispatch(editCategory(category))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditCategories);
