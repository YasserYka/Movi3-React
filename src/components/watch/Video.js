import React, { Component } from 'react';
import Comments from './Comments';

class Video extends Component {

    state = {}

    //componentDidMount(){
        //const player = window.dashjs.MediaPlayer().create();
       // player.initialize(document.querySelector("#videoPlayer"), /*this.state.url*/ 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd', false);
    //}

    render () {
        return (
            <React.Fragment>
                <div align="center" className="embed-responsive embed-responsive-16by9">
                    <video id="videoPlayer" className="embed-responsive-item" controls></video>
                </div>
            </React.Fragment>
        )
    }
}

export default Video;
