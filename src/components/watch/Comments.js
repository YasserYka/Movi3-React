import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

    constructor(props){
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8080/api/v1/comments/movieid/${this.props.movieId}`)
            .then(response => response.json())
                .then(data => this.setState({comments: data}));
    }
    
    render () {
        return (
            <div className="container mt-3 mb-3">
                { this.state.comments.map(comment => <Comment comment={comment} /> ) }
            </div>
        )
    }

}

export default Comments;
