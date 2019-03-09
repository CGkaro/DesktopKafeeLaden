import React, { Component } from "react";
import { Modal, Button, Dropdown, Divider } from "react-materialize";
import { connect } from "react-redux";
import { deleteFood } from "../../store/actions/FoodActions";

import EditFoods from "./EditFoods";

class FoodsCard extends Component {
  render() {
    const handleCompleteClick = completeToDoId => {
      this.props.deleteFood(completeToDoId);
    };

    return (
      <tr>
        <td>{this.props.category.Id}</td>
        <td>{this.props.category.Name}</td>
        <td>{this.props.category.Description}</td>
        <td>{this.props.category.Discount}</td>
        <td>{this.props.category.MenuId}</td>
        <td>{this.props.category.Price}</td>
        <td>
          {/* Modal; */}
          <Modal
            header={this.props.category.Name}
            fixedFooter
            trigger={
              <div>
                <Button floating waves="light" icon="edit">
                  Edit
                </Button>
              </div>
            }
          >
            <EditFoods
              data={this.props.category.Id}
              category={this.props.category}
            />
          </Modal>
          {/* Modal end */}
        </td>
        <td>
          {/* Dropdown; */}
          <Dropdown
            className=""
            trigger={
              <div className="center-align">
                <Button waves="light" className="red  ">
                  Delete
                </Button>
              </div>
            }
          >
            <li>
              <a href="#!">Are you sure?</a>
            </li>

            <Divider />
            <li>
              <a onClick={() => handleCompleteClick(this.props.category.Id)}>
                Accept
              </a>
            </li>
            <li>
              <a>Close</a>
            </li>
          </Dropdown>
          {/* Dropdown; */}
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { deleteFood }
)(FoodsCard);
