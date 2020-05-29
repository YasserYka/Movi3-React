import React, { Component } from 'react';

class Comments extends Component {

    constructor(props){
        super(props);

        this.state = {}
    }
    
    render () {
        return (
            <div className="container mt-3 mb-3">
                <div className="media border p-3">
                    <img className="mr-3" width="80" src="/avatar1.png" alt="John Doe"  />
                    <div className="media-body">
                        <h5><strong> John Doe </strong><small><i>February 19, 2016</i></small></h5>
                        <p className="mt-2 ml-2"> Awesome! </p>
                    </div>
                </div>
                <div className="media border p-3">
                    <img className="mr-3" width="80" src="/avatar1.png" alt="John Doe"  />
                    <div className="media-body">
                        <h5><strong> John Doe </strong><small><i>February 19, 2016</i></small></h5>
                        <p className="mt-2 ml-2"> Awesome! </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Comments;
