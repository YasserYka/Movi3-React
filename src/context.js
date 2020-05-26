import React, { Component } from 'react';
import {ListOfMovies} from './util/Fakedata'
const Context = React.createContext();

export class Provider extends Component {

    state = {
        movie_lists: [],
        heading: []
    }

    componentDidMount() {
        //Fetch api

        this.setState({
            movie_lists: [...this.state.movie_lists, ListOfMovies],
            heading: [...this.state.heading, 'Movies Being Watched Right Now']
        })
    }

    ListOfMovies

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
