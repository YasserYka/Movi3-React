import React from 'react';

const Comment = (props) => {

    const { comment } = props;

    return (
        <div className="media border p-3">
            <img className="mr-3" width="80" src={`/avatar${comment.avatarId}.png`} alt="John Doe"  />
            <div className="media-body">
                <h5><strong> { comment.username } </strong><small><i> {comment.date} </i></small></h5>
                <p className="mt-2 ml-2"> {comment.body} </p>
            </div>
        </div>
    )
}

export default Comment;