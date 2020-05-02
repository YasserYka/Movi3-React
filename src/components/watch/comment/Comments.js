import React, { Component } from 'react';
import Comment from './Comment';
import '../../../comment.css';

class Comments extends Component {

    state = { comments: [1, 2, 3] }
    
    render () {
        return (  
            <React.Fragment>
                {/* Comment card */}
                <div className="row bootstrap snippets">
                    <div className="col-md-6 col-md-offset-2 col-sm-12">
                        <div className="comment-wrapper">
                            <div className="panel panel-info">
                                <div className="panel-body">
                                    <ul className="media-list">
                                        { this.state.comments.map((comment, index) => ( <Comment key={index} comment={comment} /> )) }
                                    </ul>
                                    <textarea className="form-control" placeholder="write a comment..." rows="3" />
                                    <br />
                                    <button type="button" className="btn btn-info pull-right">Post</button>
                                    <div className="clearfix"></div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}

export default Comments;