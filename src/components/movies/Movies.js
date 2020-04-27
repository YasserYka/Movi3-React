import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Movie from './Movie.js';

class Movies extends Component {

    render () {
        return (
            <Consumer>
                {value => {   
                        const { movie_list, heading } = value;
                        console.log(movie_list)
                        if(movie_list === undefined || movie_list.length === 0)
                            return <Spinner />
                        else{
                            return (
                                <React.Fragment>
                                    <h3 className="text-dark text-center mb-4">{heading}</h3>
                                    <div className="row">
                                        {
                                            movie_list.map((element, index) => (
                                                    <Movie key={index} movie={element} />
                                                )
                                            )
                                        }
                                    </div>
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