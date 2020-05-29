import React, { Component } from 'react';
import Comments from './Comments';

class Video extends Component {

    state = {}

    componentDidUpdate(prevState){
        console.log(this.props.adaptive)
        if(this.props.adaptive){
            const player = window.dashjs.MediaPlayer().create();
            player.initialize(document.querySelector("#videoPlayer"), /*this.state.url*/ 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd', false);
        }
    }

    render () {
        return (
            <React.Fragment>
                {this.props.adaptive ?
                        <div align="center" className="embed-responsive embed-responsive-16by9">
                            <video id="videoPlayer" className="embed-responsive-item" controls></video>
                        </div>
                    :
                        <video preload="auto" width="640" height="264" class="video-js" width="320" height="240" autoplay="autoplay" data-setup="{}" controls>
                            <source src="http://localhost:8080/api/v1/region/sample.mp4" type="video/mp4" />
                    
                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                }
            </React.Fragment>
        )
    }
}

export default Video;
