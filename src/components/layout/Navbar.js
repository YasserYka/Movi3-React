import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <a class="navbar-brand" href="#">Brand</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
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
