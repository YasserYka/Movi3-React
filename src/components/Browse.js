import React, { Component } from 'react';
import Movies from './movies/Movies';
import { ListOfMovies } from '../util/Fakedata'

class Browse extends Component {

    state = {
        movies: [],
        url: null
    }

    componentDidMount(){
        const { url } = this.props.location.state;

        this.setState({url: url, movies: ListOfMovies});
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
