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
import { deleteCategories } from "../../store/actions/CategoriesActions";

class CategoryCard extends Component {
  render() {
    const handleCompleteClick = completeToDoId => {
      this.props.deleteCategories(completeToDoId);
    };
    return (
      <div className="col s3 ">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light  ">
            <img src={this.props.category.Image} />
            <span className="card-title">{this.props.category.Name}</span>
          </div>
          <p id="contentCard">jngvlsnwevl</p>

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
                Here will be a form for editing
              </Modal>
            </div>

            <div>
              <a>
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
                      href="#!"
                      onClick={() =>
                        handleCompleteClick(this.props.category.Id)
                      }
                    >
                      Accept
                    </a>
                  </li>
                  <li>
                    <a href="#!">Close</a>
                  </li>
                </Dropdown>
              </a>
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
