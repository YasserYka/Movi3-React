import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(props){
        super(props);

        this.state = {
            comments: [{body: 'Cool', username: 'Some1', date: '2020/5/5', avatarId: 4}, {body: 'Cool', username: 'Some1', date: "2020/5/5", avatarId: 2}]
        }
    }

    /*componentDidMount(){
        fetch('http://localhost:8080/api/v1/comments')
            .then(response => response.json())
                .then(data => this.setState({comments: data.content}));
    }*/
    
    render () {
        return (
            <div className="container mt-3 mb-3">
                {
                    this.state.comments.map(comment => ( <Comment comment={comment} /> ))
                }
            </div>
        )
    }

}

export default Comments;
