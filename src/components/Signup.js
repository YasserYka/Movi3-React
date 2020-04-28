import React, { Component } from "react";

class Signup extends Component {

    submit = () => {

    }

    render() {
        return (
            <form>
                <div class="form-group">
                    <input class="form-control" placeholder="Enter Your Username" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Enter Your Email" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Enter Your Password" />
                </div>
                <button type="submit" class="btn btn-primary">Signup</button>
            </form>
        )
    }
}

export default Signup;
