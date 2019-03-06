import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/AuthActions";
import { connect } from "react-redux";

const SideBar = props => {
  console.log("SIDEBAR PROPS", props);
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
          <Link to="/Homepage">
            <i className="material-icons">cloud</i>Categories
          </Link>
        </li>
        <li>
          <Link to="/Food">
            <i className="material-icons">cloud</i>Foods
          </Link>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Addendum</a>
        </li>
        <li>
          <a className="waves-effect" href="#!" onClick={props.signOut}>
            SignOut
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SideBar);
