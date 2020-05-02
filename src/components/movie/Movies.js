import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../spinner/Spinner';
import Movie from './Movie.js';

class Movies extends Component {

    render() {
        return (
            <Consumer>
                {value => {

                    const { rows } = value;

                    if (rows === undefined || rows.length === 0)
                        return <Spinner />
                    else {
                        return (
                            <div>
                                {rows.map((row) => {
                                    return (
                                        <div>
                                            <div className="pb-3">
                                                <h3 className="text-center d-inline row-header">{row.heading}&nbsp;</h3>
                                            </div>
                                            <div className="row w-100">
                                                {
                                                    row.movie_list.map(movie => (
                                                        <Movie  key={movie.id} movie={movie} />
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>);
                                })}
                            </div>

                        );
                    }
                }
                }
            </Consumer>
        )
    }
}


export default Movies;