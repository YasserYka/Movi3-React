import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {

    state = {
        movie_list: [],
        heading: 'Movies Being Watched Right Now'
    }

    componentDidMount() {
        
        fetch('http://localhost:8080/api/v1/movies')
            .then(response => response.json())
                .then(movies => {
                    this.setState({ movie_list: movies })
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
