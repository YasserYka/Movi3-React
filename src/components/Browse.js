import React, { Component } from 'react';
import Movies from './movies/Movies';

class Browse extends Component {

    state = {
        movies: []
    }

    componentDidMount(){
        fetch(this.props.url)
            .then(response => response.json())
                .then(data => this.setState({movies: data});
    }

    render () {
        return (
            <Movies movies={this.state.movies} />
        )
    }
}

export default Quicksearch;
