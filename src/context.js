import React, { Component } from 'react';
import {ListOfMovies} from './util/Fakedata'
const Context = React.createContext();

export class Provider extends Component {

    state = {
        movie_list: ListOfMovies,
        heading: 'Movies Being Watched Right Now'
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
