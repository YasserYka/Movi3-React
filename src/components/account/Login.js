import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import AlertResponseText from './alert/AlertResponseText';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            responseMessage: null,
            redirect: false
        }
        
        this.submit = this.submit.bind(this);
    }

    submit(event){
        if(event)
            event.preventDefault();

        fetch('http://localhost:8080/api/v1/users/login',{ method: 'POST',
         headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          credentials: 'same-origin',
           body: JSON.stringify({'username': event.target.username.value, 'password': event.target.password.value})})
            .then(response => {
                if(response.status === 403)
                    this.setState({responseMessage: 'Wrong username or password!'})
                else if(response.status === 200)
                    this.setState({redirect: true})
                return response.json()
            }).then(data => localStorage.setItem('token', data.token));
    }


    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.submit}>

                    <AlertResponseText responseMessage={this.state.responseMessage} />

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input autoComplete="username" type="text" className="form-control" name="username" id="username" placeholder="Enter Username" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="new-password" className="form-control" name="password" id="password" placeholder="Enter Password" required/>
                    </div>

                    <button type="submit" className="btn btn-secondary btn-block"> Login </button>

                    <Link to="/signup" className="btn btn-outline-secondary btn-block"> Create Account </Link>
                </form> 

                {this.state.redirect && ( <Redirect to='/' /> )}
            </React.Fragment>
        )
    }

}

export default Login;