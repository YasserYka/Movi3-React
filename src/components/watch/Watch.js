import React, { Component } from 'react';
import Comments from './Comments';
import Video from './Video';

class Watch extends Component {

    state = {
        url: `http://localhost:8080/api/v1/movie/${this.props.match.params.id}`,
        id: this.props.match.params.id,
        adaptive: false
    }

    render () {
        return (
            <React.Fragment>
                <div className="btn-group d-flex mb-3" role="group">
                    <button type="button" onClick={() => this.setState({adaptive: false})} class={`btn btn-${this.state.adaptive ? 'primary' : 'secondary'} w-100`} disabled={!this.state.adaptive}> Regular Streaming </button>
                    <button type="button" onClick={() => this.setState({adaptive: true})} class={`btn btn-${this.state.adaptive ? 'secondary' : 'primary'} w-100`} disabled={this.state.adaptive}> Adaptive Streaming </button>
                </div>
                <Video url={'http://localhost:8080/api/v1/region/sample.mp4'} adaptive={this.state.adaptive} />
                <Comments movieId={2} />
            </React.Fragment>
        )
    }
}

export default Watch;
