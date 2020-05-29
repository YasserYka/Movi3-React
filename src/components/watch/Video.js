import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class Video extends Component {

    videojs = null;
    
    componentDidMount() {
        this.videojs = videojs(this.videoNode, this.videoJsConfig(this.props.url), function onPlayerReady() {});
    }

    videoJsConfig(url){
        return {
            autoplay: true,
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

export default Video;
