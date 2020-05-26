import React, { Component } from 'react';
import {ListOfMovies} from './util/Fakedata'
const Context = React.createContext();

export class Provider extends Component {

    state = {
        rows: []
    }

    componentDidMount() {
        this.setState({
            rows: this.state.rows.concat({heading: 'Movies Being Watched Right Now' ,movie_list: ListOfMovies}, {heading: 'Trending' ,movie_list: ListOfMovies}, {heading: 'Most Viewed' ,movie_list: ListOfMovies})
        })
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
