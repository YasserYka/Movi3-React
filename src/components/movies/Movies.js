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
                        
                        if(movie_list === undefined || movie_list.length === 0)
                            return <Spinner />
                        else{
                            return (
                                <React.Fragment>
                                    <div>
                                        <h3 className="text-dark text-center mb-4">{heading}&nbsp;<i class="fas fa-fire"></i></h3>
                                    </div>
                                    <div className="row">
                                        {
                                            movie_list.map(element => (
                                                    <Movie key={element.id} movie={element} />
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