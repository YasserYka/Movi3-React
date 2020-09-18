import React, { Component } from 'react';

class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            profile: {
                fullName: null,
                username: null,
                email: null,
                avatarId: 0,
                bio: null,
                enabled: false,
                lastSeen:null,
                joined: null,
                newAvatarId: null
            }
        }

        this.changeAvatar = this.changeAvatar.bind(this);
    }
    
    componentDidMount(){
        /*if(localStorage.getItem('token') !== null)
            fetch('http://localhost:8080/api/v1/users/profile', {
            headers: {
                Authorization : 'Bearer ' + localStorage.getItem('token') 
            },
            credentials: 'same-origin'})
                .then(response => response.json())
                    .then(data => this.setState({profile: {enabled: data.enabled, lastSeen: data.lastSeen, joined: data.creationDate, fullName: data.fullName, username: data.username, email: data.email, avatarId: data.avatarId, bio: data.bio}}));
        */ }

    logout(){
        if(localStorage.getItem('token') !== null)
            localStorage.removeItem('token');
    }

    changeAvatar(){
        this.setState({profile: {avatarId: event.target.getAttribute("data-img-id")}})
    }
    
    render () {
        return (
            <div className="container">

                {/* Left navigation box */}
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3" style={{"width": "200px"}}>
                        <div className="card p-3">
                        <div className="e-navlist e-navlist--active-bg">
                            <ul className="nav">
                            <li className="nav-item"><a className="nav-link px-2 active" href="./overview.html"><i className="fa fa-fw fa-bar-chart mr-1"></i><span>Overview</span></a></li>
                            <li className="nav-item"><a className="nav-link px-2" href="./users.html"><i className="fa fa-fw fa-th mr-1"></i><span>CRUD</span></a></li>
                            <li className="nav-item"><a className="nav-link px-2" href="./settings.html"><i className="fa fa-fw fa-cog mr-1"></i><span>Settings</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">

                    {/* Inforamation form */}                    
                    <div className="row">
                        <div className="col mb-3">
                            <div className="card">
                            <div className="card-body">
                                <div className="e-profile">
                                <div className="row">
                                    <div className="col-12 col-sm-auto mb-3">
                                    <div className="mx-auto" style={{"width": "140px"}}>
                                        <div className="d-flex justify-content-center align-items-center rounded" style={{"height": "140px"}}>
                                            <img src={`/avatar${this.state.profile.avatarId}.png`} className="rounded-circle z-depth-0" style={{maxWidth: "150px", maxHeight: "150px"}} alt="avatar" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{this.state.profile.fullName}</h4>
                                        <p className="mb-0">{this.state.profile.username}</p>
                                        <div className="text-muted"><small>Last seen {this.state.profile.lastSeen}</small></div>
                                        <div className="mt-2">
                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">Change Picture</button>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Pick a picutre</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="container">
                                                        <div className="col mt-3 mb-3">
                                                            <img src={`/avatar0.png`} data-dismiss="modal" data-img-id='0' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "right"}} alt="avatar" />
                                                            <img src={`/avatar1.png`} data-dismiss="modal" data-img-id='1' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "left"}} alt="avatar" />
                                                        </div>
                                                        <div className="col">
                                                            <img src={`/avatar2.png`} class="" data-dismiss="modal" data-img-id='2' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "right"}} alt="avatar" />
                                                            <img src={`/avatar3.png`} data-dismiss="modal" data-img-id='3' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "left"}} alt="avatar" />
                                                        </div>
                                                        <div className="col">
                                                            <img src={`/avatar4.png`} data-dismiss="modal" data-img-id='4' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "right"}} alt="avatar" />
                                                            <img src={`/avatar5.png`} data-dismiss="modal" data-img-id='5' onClick={this.changeAvatar} className="rounded-circle z-depth-0 mt-1 mb-1 close" style={{maxWidth: "150px", maxHeight: "150px", float: "left"}} alt="avatar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center text-sm-right">
                                        {this.state.profile.enabled ? <span className="badge badge-secondary">verified</span> : <span className="badge badge-danger">not verified</span>} 
                                        <div className="text-muted"><small>Joined {this.state.profile.lastSeen}</small></div>
                                    </div>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
                                </ul>
                                <div className="tab-content pt-3">
                                    <div className="tab-pane active">
                                    <form className="form" noValidate="">
                                        <div className="row">
                                        <div className="col">
                                            <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                <label>Full Name</label>
                                                <input autoComplete="off" className="form-control" type="text" name="name" placeholder={this.state.profile.fullName} readOnly />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                <label>Username</label>
                                                <input autoComplete="off" className="form-control" type="text" name="username" placeholder={this.state.profile.username} readOnly />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                <label>Email</label>
                                                <input autoComplete="off" className="form-control" type="text" placeholder={this.state.profile.email} readOnly />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col mb-3">
                                                <div className="form-group">
                                                <label>About</label>
                                                <textarea className="form-control" rows="5" placeholder={this.state.profile.bio} readOnly></textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-12 col-sm-6 mb-3">
                                            <div className="mb-2"><b>Change Password</b></div>
                                            <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                <label>Current Password</label>
                                                <input autoComplete="off" className="form-control" type="password" placeholder="••••••" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                <label>New Password</label>
                                                <input autoComplete="off" className="form-control" type="password" placeholder="••••••" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                                <input autoComplete="off" className="form-control" type="password" placeholder="••••••" /></div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                            <div className="mb-2"><b>Keeping in Touch</b></div>
                                            <div className="row">
                                            <div className="col">
                                                <label>Email Notifications</label>
                                                <div className="custom-controls-stacked px-2">
                                                <div className="custom-control custom-checkbox">
                                                    <input autoComplete="off" type="checkbox" className="custom-control-input" id="notifications-blog" defaultChecked="" />
                                                    <label className="custom-control-label" htmlFor="notifications-blog">Blog posts</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input autoComplete="off" type="checkbox" className="custom-control-input" id="notifications-news" defaultChecked="" />
                                                    <label className="custom-control-label" htmlFor="notifications-news">Newsletter</label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input autoComplete="off" type="checkbox" className="custom-control-input" id="notifications-offers" defaultChecked="" />
                                                    <label className="custom-control-label" htmlFor="notifications-offers">Personal Offers</label>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col d-flex justify-content-end">
                                            <button className="btn btn-primary" type="submit">Save Changes</button>
                                        </div>
                                        </div>
                                    </form>

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side boxes */}
                    <div className="col-12 col-md-3 mb-3">

                        {/* Logout box */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="px-xl-3">
                                <button onClick={this.logout} className="btn btn-block btn-secondary">
                                    <i className="fa fa-sign-out"></i>
                                    <span>Logout</span>
                                </button>
                                </div>
                            </div>
                        </div>

                        {/* Support box */}
                        <div className="card">
                        <div className="card-body">
                            <h6 className="card-title font-weight-bold">Support</h6>
                            <p className="card-text">Get fast, free help from our friendly assistants.</p>
                            <button type="button" className="btn btn-primary">Contact Us</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
        )
    }

}

export default Profile;