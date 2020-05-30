import React, { Component } from 'react';
import { ListOfMovies } from './util/Fakedata'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        rows: [
            {heading: 'Movies Being Watched Right Now', button: false, movies: [], icon: 'tv'},
            {url: 'http://localhost:8080/api/v1/movies/trending?page=0&size=6', heading: 'Trending', button : true, movies: [], icon: 'fire', },
            {url: 'http://localhost:8080/api/v1/movies/mostviewed?page=0&size=6', heading: 'Most Viewed', button: true, movies: [], icon: 'eye'}
        ]
    }

    componentDidMount() {
        this.state.rows.forEach((row, index) => {
            if(row.url)
                fetch(row.url)
                    .then(response => response.json())
                        .then(data => {
                            let newRows = [...this.state.rows]; 
                            newRows[index].movies = data.content;
                            this.setState({rows: newRows});
                        } ); 
        });

        console.log(this.state.rows)
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
