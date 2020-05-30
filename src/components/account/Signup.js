import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {

    constructor(props){
        super(props);
        
        this.submit = this.submit.bind(this);
    }

    submit(event){
        if(event)
            event.preventDefault();

        fetch('http://localhost:8080/api/v1/users/signup',{ method: 'POST',
         headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          credentials: 'same-origin',
           body: JSON.stringify({'username': event.target.username.value, 'email': event.target.email.value, 'password': event.target.password1.value, 'confirmedPassword': event.target.password2.value})})
            .then(response => response.json())
                .then(data => console.log(data));
    }

    render () {
        return (
            <form>
                <div className="form-group" onSubmit={this.submit}>
                    <label htmlFor="username">Username</label>
                    <input autoComplete="username" type="text" className="form-control" name="username" id="username" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Password</label>
                    <input name="password1" autoComplete="new-password" type="password" className="form-control" id="password1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" autoComplete="new-password" name="password2" className="form-control" id="password2" placeholder="Rewrite Password" />
                </div>
                <button type="submit" className="btn btn-secondary btn-block"> Signup </button>
                <Link to="/login" className="btn btn-outline-secondary btn-block"> Already Have An Account? </Link>
            </form> 
        )
    }

}

export default Signup;