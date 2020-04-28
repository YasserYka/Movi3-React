import React, { Component } from 'react';

class Comments extends Component {
    
    submit = () => {
        fetch('http://localhost:8080/api/v1/comments')
            .then(response => console.log(response.status) );
    }

    render () {
        return (  
            <React.Fragment>
            </React.Fragment>  
        )
    }
}

export default Comments;