import React, { Component } from "react";
import { Modal, Button, Dropdown, Divider } from "react-materialize";
import { connect } from "react-redux";
import { deleteCategories } from "../../store/actions/CategoriesActions";
import EditCategories from "./EditCategories";

class CategoryCard extends Component {
  render() {
    const handleCompleteClick = completeToDoId => {
      this.props.deleteCategories(completeToDoId);
    };
    return (
      <div className="col s12 m3 l3 " id="card-wrapper">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light  ">
            <img src={this.props.category.Image} alt="" />
            <span
              className="card-title"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {this.props.category.Name}
            </span>
          </div>
          <div className="card-action">
            <div className="right-align" id="editCardButton">
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
                <EditCategories data={this.props.category.Id} />
              </Modal>
            </div>

            <div>
              <Dropdown
                trigger={
                  <div className="center-align">
                    <Button waves="light" className="red">
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
                    href="#!"
                    onClick={() => handleCompleteClick(this.props.category.Id)}
                  >
                    Accept
                  </a>
                </li>
                <li>
                  <a href="#!">Close</a>
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
  { deleteCategories }
)(CategoryCard);
