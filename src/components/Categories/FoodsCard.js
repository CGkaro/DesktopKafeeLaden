import React, { Component } from "react";
import {
  Modal,
  Button,
  Row,
  Dropdown,
  NavItem,
  Divider
} from "react-materialize";
import { connect } from "react-redux";
import { deleteFood } from "../../store/actions/CategoriesActions";
import { NavLink } from "react-router-dom";
import EditFoods from "./EditFoods";

class FoodsCard extends Component {
  render() {
    const handleCompleteClick = completeToDoId => {
      this.props.deleteFood(completeToDoId);
    };
    return (
      <div className="col s3 ">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light  ">
            <img src={this.props.category.Image} />

            <span className="card-title">{this.props.category.Name}</span>
          </div>

          <div className="card-action">
            <div className="right-align" id="editCardButton">
              <Modal
                header="Modal Header"
                fixedFooter
                trigger={
                  <div>
                    <Button floating waves="light" icon="edit">
                      Edit
                    </Button>
                  </div>
                }
              >
                <EditFoods />
              </Modal>
            </div>

            <div>
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
                  <a
                    onClick={() => handleCompleteClick(this.props.category.Id)}
                  >
                    Accept
                  </a>
                </li>
                <li>
                  <a>Close</a>
                </li>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteFood }
)(FoodsCard);
