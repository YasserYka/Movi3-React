import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <form>
                <div class="form-group">
                    <input class="form-control" placeholder="Enter Your Username" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Your Password" />
                </div>
            </form>
        )
    }
}



export default Login;