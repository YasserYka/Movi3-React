import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        
        this.submit = this.submit.bind(this);
    }

    submit(event){
        if(event)
            event.preventDefault();

        fetch('http://localhost:8080/api/v1/users/login',{ method: 'POST',
         headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          credentials: 'same-origin',
           body: JSON.stringify({'username': event.target.username.value, 'password': event.target.password.value})})
            .then(response => response.json())
                .then(data => localStorage.setItem('token', data.token));
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" name="username" id="username" placeholder="Enter Username" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-secondary btn-block"> Login </button>

                <Link to="/signup" className="btn btn-outline-secondary btn-block"> Create Account </Link>
            </form> 
        )
    }

}

export default Login;