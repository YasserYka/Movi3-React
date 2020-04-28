import React from 'react';
import { Link } from 'react-router-dom';
import '../comment.css';

const Comment = (props) => {

    const { comment } = props;

    return (
        <li class="media">
            <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle" />
            <div className="media-body">
            <strong className="text-success m-2">Username</strong>
                <span className="text-muted pull-right">
                    <small className="text-muted m-2">30 min ago</small>
                </span>
                <p className="m-2">
                    Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </li>
    )
}

export default Comment;