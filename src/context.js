import React, { Component } from 'react';
import {ListOfMovies} from './util/Fakedata'
const Context = React.createContext();

export class Provider extends Component {

    state = {
        movie_list: ListOfMovies,
        heading: ["Recommended for you", "Trending", "What are your friends watching?"]
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/movies')
            .then(resault => resault.json())
            .then(result => {
                console.log(result);
            });
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
