import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(props){
        super(props);
        console.log('??')

        this.state = {
            comments: [{avatarId: 0, username: 'Yasser', date: '2020, 09', body: 'Decent work!'}]
        }
    }

    componentDidMount(){

    }
    
    render () {

        this.state.comments.map(comment => console.log(comment));
        return (
            <React.Fragment>
                <div class="card gedf-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Write a comment</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card gedf-card">
                    <div class="card-body">
                        { this.state.comments.map((comment, index) => <Comment key={index} comment={comment} /> ) }
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Comments;
