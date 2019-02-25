import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";

export class SideBar extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul id="slide-out" className="side-nav fixed">
          <li>
            <div className="userView">
              <div className="background">
                <img src="https://img.grouponcdn.com/pwa_test/gz8X5AKEGBZ2mudqiwg1LpgpoKq/gz-800x533/v1/c700x420.jpg" />
              </div>
              <a href="#user">
                <img
                  className="circle"
                  src="http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-40/256/Fallout-New-Vegas-3-icon.png"
                />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>Categories
            </a>
          </li>
          <li>
            <a href="#!">Add user</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Addendum</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
