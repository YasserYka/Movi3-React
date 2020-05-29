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
                <div class="btn-group" role="group">
                <button type="button" onClick={() => this.setState({adaptive: false})} class="btn btn-secondary" disabled={!this.state.adaptive}> Regular Streaming </button>
                    <button type="button" onClick={() => this.setState({adaptive: true})} class="btn btn-secondary" disabled={this.state.adaptive}> Adaptive Streaming </button>
                </div>
                <Video />
                <Comments movieId={2} />
            </React.Fragment>
        )
    }
}

export default Watch;
