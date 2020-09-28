import React, { Component } from 'react';
import Comments from './comments/Comments';
import Videojs from './mediaplayers/Videojs';
import Dashjs from './mediaplayers/Dashjs';
import Spinner from '../spinner/Spinner';

class Watch extends Component {

    state = {
        adaptiveStreaming: false,
        movie: null,
        movieDataReturned: false
    }

    componentDidMount(){

        fetch(`http://localhost:8080/api/v1/movies/${this.props.match.params.movieId}`, {
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            credentials: "same-origin",
        })
        .then(response => response.json())
        .then(data => {
            this.setState({movie: data, movieDataReturned: true})
        });

    }

    render () {

        return (
            <React.Fragment>
                {!this.state.movieDataReturned ? <Spinner /> :
                    <React.Fragment>
                        <div className="btn-group d-flex mb-3" role="group">
                            <button type="button" onClick={() => this.setState({adaptiveStreaming: false})} className={`btn btn-${this.state.adaptiveStreaming ? 'primary' : 'secondary'} w-100`} disabled={!this.state.adaptiveStreaming}> Regular Streaming </button>
                            <button type="button" onClick={() => this.setState({adaptiveStreaming: true})} className={`btn btn-${this.state.adaptiveStreaming ? 'secondary' : 'primary'} w-100`} disabled={this.state.adaptiveStreaming}> Adaptive Streaming </button>
                        </div>
                        
                        {this.state.adaptiveStreaming ? <Dashjs url={`http://localhost:8080/api/v1/manifests/sample_manifest.mpd`} /> : <Videojs url={`http://localhost:8080/api/v1/region/sample_720.mp4`} />}
                        
                        <div className="card gedf-card mt-3">
                            <div className="card-body">
                                
                                <div className="row">
                                    <div className="col-auto">
                                        <img className="card-img" style={{height: "100%", maxWidth: "150px"}} src={`http://localhost:8080/${this.state.movie.posterUrl}`}  alt="poster of the movie"></img> 
                                    </div>
                                    <div className="col-auto">
                                        <div className="card-body">
                                            <h5 className="card-title"> <strong> {this.state.movie.title} ({this.state.movie.release}) </strong> </h5>
                                            <p className="card-text">{this.state.movie.description}</p>
                                        </div>
                                        <ul className="list-group list-group-horizontal">
                                                <li className="list-group-item"><strong><i className="fas fa-star mr-1"> </i></strong> {this.state.movie.rating}</li>
                                                <li className="list-group-item"><strong><i className="fas fa-calendar-alt mr-1"> </i></strong> {this.state.movie.release}</li>
                                                <li className="list-group-item"><strong><i className="fas fa-heart mr-1"> </i></strong> {this.state.movie.likeCount}</li>
                                                <li className="list-group-item"><strong><i className="fas fa-eye mr-1"> </i></strong> {this.state.movie.viewCount}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }  
                <Comments />


            </React.Fragment>
        )
    }
}

export default Watch;
