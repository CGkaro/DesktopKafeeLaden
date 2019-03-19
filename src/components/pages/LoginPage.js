import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/AuthActions";
import { Redirect } from "react-router-dom";
import SearchNav from "../layout/SearchNav";
import NavBar from "../layout/Navbar";

export class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/Homepage" />;
    return (
      <div>
        <NavBar />
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>

            <div className="input-field">
              <label htmlFor="email">email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">LogIn</button>
            </div>
            <div className="red-text center" />
          </form>
        </div>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { authError: state.auth.authError, auth: state.firebaseAuth.auth };
};
const mapDispatchToProps = dispatch => {
  return { signIn: creds => dispatch(signIn(creds)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
