import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-5 justify-content-center fixed-top custom-navbar">
            <div className="w-100">
                <div className="row">
                    <div className="col-6 nav-col">
                        {/*Left-col*/}
                        <ul className="navbar-nav w-100">
                            <li className="nav-item">
                                {/*Img with pseudoelement*/}
                                <a className="navbar-brand" href="#"><img src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png" width="60" height="50" /></a>
                            </li>
                            <form className="form-inline w-50">
                                <input className="form-control shadow-none w-100" placeholder="Search a movie..." aria-label="Search" />
                            </form>
                        </ul>
                    </div>
                    <div className="col-6 nav-col">
                        {/*Right-col*/}
                        <ul className="navbar-nav ml-auto contact-about">
                            <div class=" d-none d-sm-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                            </div>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="https://i.postimg.cc/43X6F42c/profile-icons-netflix.jpg" width="40" height="40" class="rounded-circle" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right toggled-nav-options" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#"><img src="https://i.postimg.cc/43w6CCjS/profile-icons-netflix-1.jpg" class="rounded-circle mr-1" width="40" height="40" /> Username</a>
                                    <a className="dropdown-item" href="#"><img src="https://i.postimg.cc/RZ71RJd9/profile-icons-netflix-2.jpg" class="rounded-circle mr-1" width="40" height="40" /> Username</a>
                                    <a className="dropdown-item mt-1" href="#">Manage profiles</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
