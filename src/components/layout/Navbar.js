import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "react-materialize";

class NavBar extends Component {
  state = {};

  render() {
    console.log("searchnavnac", this.props);
    return (
      <nav>
        <div class="nav-wrapper  #263238 blue-grey darken-4">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <NavItem>LogIn</NavItem>
              </Link>
            </li>
            <li>
              <Link to="/SignUp">
                <NavItem>SignUp</NavItem>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
