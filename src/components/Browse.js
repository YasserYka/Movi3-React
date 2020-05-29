import React, { Component } from 'react';
import Movies from './movies/Movies';

class Browse extends Component {

    state = {
        movies: [],
        url: null,
    }

    componentDidMount(){
        const { url } = this.props.location.state;

        fetch(`${url}?page=0&size=6`)
            .then(response => response.json())
                .then(data => this.setState({movies: data.content}));
    }

    render () {
        return (
            <React.Fragment>
                <Movies movies={this.state.movies} />
            </React.Fragment>
        )
    }
}

export default Browse;
