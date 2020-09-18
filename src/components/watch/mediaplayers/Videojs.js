import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class Videojs extends Component {

    videojs = null;
    
    componentDidMount() {
        this.videojs = videojs(this.videoNode, this.config(this.props.url), function onPlayerReady() {});
    }

    config(url){
        return {
            autoplay: false,
            controls: true, 
            sources: [{
                src: url          
            }]
        }
    }
    
    componentWillUnmount() {
        if (this.videojs)
            this.videojs.dispose();
    }

    render() {
        return (
            <div>	
                <div data-vjs-player>
                    <video ref={ node => this.videoNode = node } className="video-js embed-responsive embed-responsive-16by9"></video>
                </div>
            </div>
        );
    }
}

export default Videojs;
