import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class ProfileNav extends Component {

    state = { avatarId: 0 }

    static propTypes = { user: PropTypes.object };

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user)
            this.setState({ avatarId: this.props.user.avatarId });
    }

        component
        render() {
            return (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={`/avatar${this.state.avatarId}.png`} className="rounded-circle z-depth-0" width="40" height="40" alt="avatar" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary">
                        <Link to="/profile" className="dropdown-item"> View Profile </Link>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            )
        }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileNav);
