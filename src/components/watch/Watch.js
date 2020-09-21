import React, { Component } from 'react';
import Comments from './comments/Comments';
import Videojs from './mediaplayers/Videojs';
import Dashjs from './mediaplayers/Dashjs';

class Watch extends Component {

    state = {
        adaptiveStreaming: false
    }

    render () {
        return (
            <React.Fragment>

                <div className="btn-group d-flex mb-3" role="group">
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: false})} className={`btn btn-${this.state.adaptiveStreaming ? 'primary' : 'secondary'} w-100`} disabled={!this.state.adaptiveStreaming}> Regular Streaming </button>
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: true})} className={`btn btn-${this.state.adaptiveStreaming ? 'secondary' : 'primary'} w-100`} disabled={this.state.adaptiveStreaming}> Adaptive Streaming </button>
                </div>
                
                {this.state.adaptiveStreaming ? <Dashjs url={`http://localhost:8080/api/v1/manifests/sample_manifest.mpd`} /> : <Videojs url={`http://localhost:8080/api/v1/region/sample_720.mp4`} />}
                <div class="card gedf-card">
                    <div class="card-body">
                        
                        <div class="row">
                            <div class="col-2">
                                <img className="card-img-top h-100" src={`http://localhost:8080/It.jpg`} style={{maxWidth: "150px", maxHeight: "350px"}} alt="poster of the movie"></img> 
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title"> <strong> Scarface (1983) </strong> </h5>
                                    <p class="card-text">In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.</p>
                                </div>
                                <ul class="list-group list-group-horizontal ">
                                        <li class="list-group-item"><strong><i className="fas fa-star"> Rating</i></strong>: {10}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-calendar-alt"> Release</i></strong>: {10}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-heart"> Like</i></strong>: {10}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-eye"> View</i></strong>: {10}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Comments />

            </React.Fragment>
        )
    }
}

export default Watch;
