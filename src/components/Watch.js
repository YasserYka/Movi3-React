import React, { Component } from 'react';
class Watch extends Component {

    state = {
        url: `http://localhost:8080/api/v1/movie/${this.props.match.params.id}`,
        id: this.props.match.params.id
    }

    componentDidMount(){
        const player = window.dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), /*this.state.url*/ 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd', false);
    }

    render () {

        return (
            <div align="center" className="embed-responsive embed-responsive-16by9">
                <video id="videoPlayer" className="embed-responsive-item" controls></video>
            </div>
        )
    }
}

export default Watch;
