import React, { Component } from "react";

class Login extends Component {

    submit = () => {

    }

    render() {
        return (
            <form>
                <div class="form-group">
                    <input class="form-control" placeholder="Enter Your Username" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Your Password" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Your Password" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Your Password" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        )
    }
}

export default Login;
