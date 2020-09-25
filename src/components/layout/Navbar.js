import React from 'react';
import { Link } from 'react-router-dom';
import ProfileNav from '../account/ProfileNav';

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
                    <li className="nav-item">
                        <Link to={{pathname: '/browsemore', state: {url: 'http://localhost:8080/api/v1/movies/watchlater' , heading: "Your Movies List", icon: 'list'}}} className="nav-link"> My List </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ">
                    <ProfileNav />
                </ul>
                <Quicksearch />
            </div>
        </nav>
    )
}

export default Navbar;
