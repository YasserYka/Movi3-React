import React, { Component } from 'react';

class Dashjs extends Component {

    componentDidMount() { 
        window.dashjs.MediaPlayer().create().initialize(this.player, "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd", false); 
    }

    render() {
        return (
            <video className="embed-responsive embed-responsive-16by9" ref={player => (this.player = player)} autoplay="autoplay" data-setup="{}" controls />
        );
    }
}

export default Dashjs;
