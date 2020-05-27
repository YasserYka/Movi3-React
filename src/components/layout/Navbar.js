import React from 'react';
import { Link } from 'react-router-dom';
<Link to="/signup" className="btn btn-outline-secondary btn-block"> Create Account </Link>

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <img class="navbar-brand" src="images/logo.png" width="50" height="50" />
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/browse">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="images/avatar3.png" class="rounded-circle z-depth-0" width="40" height="40" alt="avatar image" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary">
                            <Link to="/profile" className="dropdown-item"> View Profile </Link>
                            <a class="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Quick Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;
