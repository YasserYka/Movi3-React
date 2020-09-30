import React from 'react';
import Videojs from './Videojs';
import Dashjs from './Dashjs';

class MediaPlayer extends React.Component {
    
    state = { adaptiveStreaming: false };

    render() {
        return (
            <React.Fragment>
                <div className="btn-group d-flex m-2" role="group">
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: false})} className={`btn btn-${this.state.adaptiveStreaming ? 'primary' : 'secondary'} w-100`} disabled={!this.state.adaptiveStreaming}> Regular Streaming </button>
                    <button type="button" onClick={() => this.setState({adaptiveStreaming: true})} className={`btn btn-${this.state.adaptiveStreaming ? 'secondary' : 'primary'} w-100`} disabled={this.state.adaptiveStreaming}> Adaptive Streaming </button>
                </div>
                
                {this.state.adaptiveStreaming ? <Dashjs url={`http://localhost:8080/api/v1/manifests/sample_manifest.mpd`} /> : <Videojs url={`http://localhost:8080/api/v1/region/sample_720.mp4`} />}
            </React.Fragment>
        )
    }
}

export default MediaPlayer;