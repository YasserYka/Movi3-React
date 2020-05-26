import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Movie from './Movie.js';

class Movies extends Component {

    render () {
        return (
            <Consumer>
                {value => {
                        const { rows } = value;
                        console.log(rows.length)

                        if(rows === undefined || rows.length === 0)
                            return <Spinner />
                        else{
                            return (
                                <React.Fragment>
                                    {
                                        rows.map((row, index) => (
                                                <div key={index}>
                                                    
                                                    <h3 className="text-dark text-center mb-4">{row.heading}&nbsp;<i class="fas fa-fire"></i></h3>
                                                    <div className="row"> {row.movie_list.map(movie => <Movie key={movie.id} movie={movie} /> )} </div>
                                                    <hr class="my-4" />

                                                </div>
                                            )
                                        )
                                        }
                                </React.Fragment>
                            );
                        }
                    }
                }
            </Consumer>
        )
    }
}


export default Movies;