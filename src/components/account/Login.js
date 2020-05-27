import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    render () {
        return (
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-secondary btn-block"> Login </button>
                <Link to="/signup" className="btn btn-outline-secondary btn-block"> Create Account </Link>
            </form> 
        )
    }

}

export default Login;