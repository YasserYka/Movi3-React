import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-5 justify-content-center fixed-top custom-navbar">
            <div className="nav-bar-col-container w-100">
                <div className="row">
                    <div className="col">
                        {/*Left-col*/}
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                {/*Img with pseudoelement*/}
                                <a className="navbar-brand float-left" href="#">BRAND</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        {/*Right-col*/}
                        <ul className="navbar-nav w-100">
                            <li className="nav-item w-100">
                                <a className="nav-link float-right" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item float-right mr-3">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <div class="collapse navbar-collapse" id="navbar-list-4">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" width="40" height="40" class="rounded-circle" />
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a class="dropdown-item" href="#">Dashboard</a>
                                            <a class="dropdown-item" href="#">Edit Profile</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Account state</a>
                                            <a class="dropdown-item" href="#">Friends</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Log Out</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
