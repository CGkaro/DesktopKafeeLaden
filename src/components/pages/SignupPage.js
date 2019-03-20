import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/AuthActions";
import NavBar from "../layout/Navbar";

class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSumbit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <NavBar />
        <div className="container">
          <form className="white" onSubmit={this.handleSumbit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>

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
              <label htmlFor="cellphone">cellphone</label>
              <input type="text" id="phone" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">firstName</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">lastName</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebaseAuth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => {
      dispatch(signUp(newUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
