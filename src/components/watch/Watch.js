import React, { Component } from 'react';
import Comments from './Comments';
import Videojs from './Videojs';
import Dashjs from './Dashjs';

class Watch extends Component {

    state = {
        adaptiveStreaming: true
    }

    render () {
        return (
            <React.Fragment>

                <div className="btn-group d-flex mb-3" role="group">
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: false})} class={`btn btn-${this.state.adaptiveStreaming ? 'primary' : 'secondary'} w-100`} disabled={!this.state.adaptiveStreaming}> Regular Streaming </button>
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: true})} class={`btn btn-${this.state.adaptiveStreaming ? 'secondary' : 'primary'} w-100`} disabled={this.state.adaptiveStreaming}> Adaptive Streaming </button>
                </div>
                
                {this.state.adaptiveStreaming ? <Dashjs url={`http://localhost:8080/api/v1/${this.props.match.params.path}`} /> : <Videojs url={`http://localhost:8080/api/v1/region/${this.props.match.params.path}`} />}

                <Comments movieId={this.props.match.params.movieId} />

            </React.Fragment>
        )
    }
}

export default Watch;
