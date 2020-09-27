import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { login } from "../../actions/authAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from '../../actions/errorAction';

class Login extends Component {
  
  state = {
    responseMessage: null,
    redirect: false,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(preProps) {
    if (this.props.error.message !== this.state.responseMessage)
      this.setState({responseMessage: this.props.error.message});
  }

  submit(event) {
    if (event) event.preventDefault();

    this.setState({ responseMessage: null });
    this.props.clearErrors();

    this.props.login({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  }

  clearError(){
    this.setState({ responseMessage: null });
    this.props.clearErrors();
  }
  
  alertMessage(){
    return (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{this.state.responseMessage}</strong>
        <button onClick={this.clearError.bind(this)} type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>

        { this.state.responseMessage ? this.alertMessage() : null }

        <form onSubmit={this.submit.bind(this)}>

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
            Login
          </button>

          <Link to="/signup" className="btn btn-outline-secondary btn-block">
            You Don't have an account?
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

export default connect(mapStateToProps, { login, clearErrors })(Login);
