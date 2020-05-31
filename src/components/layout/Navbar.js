import React from 'react';
import { Link } from 'react-router-dom';

import Quicksearch from '../search/Quicksearch';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <img alt="logo" className="navbar-brand" src="/logo.png" width="50" height="50" />
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/advancedsearch" className="nav-link"> Browse </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link"> Login </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/avatar0.png" className="rounded-circle z-depth-0" width="40" height="40" alt="avatar" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary">
                            <Link to="/profile" className="dropdown-item"> View Profile </Link>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
                <Quicksearch />
            </div>
        </nav>
    )
}

export default Navbar;
