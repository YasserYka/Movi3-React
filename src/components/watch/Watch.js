import React, { Component } from 'react';
import Comments from './comments/Comments';
import Videojs from './mediaplayers/Videojs';
import Dashjs from './mediaplayers/Dashjs';

class Watch extends Component {

    state = {
        adaptiveStreaming: false
    }

    render () {
        const movie = this.props.location.movie;
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
                                <img className="card-img-top h-100 w-350" src={`http://localhost:8080/${movie.posterUrl}`}  alt="poster of the movie"></img> 
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title"> <strong> {movie.title} ({movie.release}) </strong> </h5>
                                    <p class="card-text">{movie.description}</p>
                                </div>
                                <ul class="list-group list-group-horizontal ">
                                        <li class="list-group-item"><strong><i className="fas fa-star mr-1"> </i></strong> {movie.rating}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-calendar-alt mr-1"> </i></strong> {movie.release}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-heart mr-1"> </i></strong> {movie.likeCount}</li>
                                        <li class="list-group-item"><strong><i className="fas fa-eye mr-1"> </i></strong> {movie.viewCount}</li>
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
