import React, { Component } from 'react';
import Comments from './comments/Comments';
import MediaPlayer from './mediaplayers/MediaPlayer';
import InformationCard from './InformationCard';
import Spinner from '../spinner/Spinner';

class Watch extends Component {

    state = {
        adaptiveStreaming: false,
        data: null,
        dataFetched: false
    }

    componentDidMount(){

        fetch(`http://localhost:8080/api/v1/movies/${this.props.match.params.movieId}`, {
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            credentials: "same-origin",
        })
        .then(response => response.json())
        .then(data => this.setState({ data: data, dataFetched: true }));

    }

    render () {

        return (
            this.state.dataFetched ? <React.Fragment><MediaPlayer /><InformationCard informations={ this.state.data } /><Comments /></React.Fragment> : <Spinner /> 
        )
    }
}

export default Watch;
