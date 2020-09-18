import React, { Component } from 'react';

class Dashjs extends Component {

    componentDidMount() { 
        window.dashjs.MediaPlayer().create().initialize(this.player, this.props.url, true); 
    }

    render() {
        return (
            <video className="embed-responsive embed-responsive-16by9" ref={player => (this.player = player)} data-setup="{}" controls />
        );
    }
}

export default Dashjs;
