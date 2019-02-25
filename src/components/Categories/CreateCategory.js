import React, { Component } from "react";
import { Modal, Button, Input, Icon } from "react-materialize";
import { connect } from "react-redux";
import { createCategory } from "../../store/actions/CategoriesActions";
import { withFirebase } from "react-redux-firebase";
import fbConfig from "../../config/fbConfig";

class CreateCategory extends Component {
  state = {
    Name: "",
    Image: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createCategory(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="col s3 center">
        <div className="card-panel ">
          <Modal bottomSheet trigger={<Button>Add category</Button>}>
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
              label="EXAMPLEID"
              id="Id"
              validate
              onChange={this.handleChange}
            />
            <Input
              label="Category name"
              id="Name"
              validate
              onChange={this.handleChange}
            >
              <Icon>account_circle</Icon>
            </Input>

            <Input type="file" label="File" placeholder="Upload Image" />

            <Input
              label="Or you can post hosting site"
              id="Image"
              validate
              onChange={this.handleChange}
            >
              <Icon>account_circle</Icon>
            </Input>
          </Modal>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(createCategory(category))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCategory);
