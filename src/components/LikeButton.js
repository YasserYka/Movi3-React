import React, { Component } from 'react';

class LikeButton extends Component {
    
    postLike = () => {
        fetch('http://localhost:8080/api/v1/likes')
            .then(response => console.log(response.status) );
    }
    
    render () {
        return (  
            <React.Fragment>
                <button className="btn btn-secondary btn-lg active" onClick={this.postLike}>
                    <i className="fas fa-heart"></i>
                </button>
            </React.Fragment>  
        )
    }
}

export default LikeButton;