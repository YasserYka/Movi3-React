import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../spinner/Spinner';
import Movie from './Movie.js';
import { Link } from 'react-router-dom';

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
                                                    
                                                    <div>
                                                        <Link to={row.browse} className="btn btn-outline-dark float-right"> <i className="fas fa-chevron-right"></i> Browse More </Link>
                                                        <h3 className="text-dark text-left mb-4">{row.heading}&nbsp;<i class="fas fa-fire"></i></h3>
                                                    </div>
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