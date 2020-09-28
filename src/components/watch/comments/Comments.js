import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(){
        super();

        this.state = {
            comments: [{avatarId: 0, username: 'Yasser', date: '2020, 09', body: 'Decent work!'}]
        }
    }

    componentDidMount(){

    }
    
    render () {

        return (
            <React.Fragment>
                <div className="card gedf-card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Write a comment</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="message">post</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between mb-3">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary">share</button>
                            </div>
                        </div>

                        { this.state.comments.map((comment, index) => <Comment key={index} comment={comment} /> ) }
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Comments;
