import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import AlertResponseText from "./alert/AlertResponseText";
import { login } from "../../actions/authAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Login extends Component {
  
  state = {
    responseMessage: null,
    redirect: false,
  };

  componentDidUpdate(preProps) {
    const { error } = this.props;

    if (error !== preProps.error)
      if (error.id === "LOGIN_FAIL")
        this.setState({ responseMessage: error.message.message });
      else this.setState({ responseMessage: null });
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  };

  submit(event) {
    if (event) event.preventDefault();

    this.props.login({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submit.bind(this)}>
          <AlertResponseText responseMessage={this.state.responseMessage} />

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="username"
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary btn-block">
            {" "}
            Login{" "}
          </button>

          <Link to="/signup" className="btn btn-outline-secondary btn-block">
            {" "}
            You Don't have an account?{" "}
          </Link>
        </form>

        {this.state.redirect && <Redirect to="/" />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
