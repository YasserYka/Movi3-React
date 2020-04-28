import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Movie from './Movie.js';

class Movies extends Component {

    render() {
        return (
            <Consumer>
                {value => {

                    const { movie_list, heading } = value;

                    if (movie_list === undefined || movie_list.length === 0)
                        return <Spinner />
                    else {
                        return (
                            <div>
                                {heading.map((header) => {
                                    return (
                                        <div>
                                            <div className="pb-3">
                                                <h3 className="text-center d-inline row-header">{header}&nbsp;</h3>
                                            </div>
                                            <div className="row w-100">
                                                {
                                                    movie_list.map(element => (
                                                        <Movie  key={element.id} movie={element} />
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