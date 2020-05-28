import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../spinner/Spinner';
import Movies from './Movies.js';
import { Link } from 'react-router-dom';

class FrontMovies extends Component {

    render () {
        return (
            <Consumer>
                {value => {
                        const { rows } = value;
                        if(rows === undefined || rows.length === 0)
                            return <Spinner />
                        else{
                            return (
                                <React.Fragment>
                                    {
                                        rows.map((row, index) => 
                                                <div key={index}>
                                                    <div>
                                                        {row.button ? <Link to={row.url} className="btn btn-outline-dark float-right"> <i className="fas fa-chevron-right"></i> Browse More </Link> : null}
                                                        <h3 className="text-dark text-left mb-4">{row.heading}&nbsp;<i class={`ml-1 fas fa-${row.icon}`} ></i></h3>
                                                    </div>
                                                    <Movies movies={row.movies} />
                                                    <hr class="my-4" />
                                                </div>
                                            
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


export default FrontMovies;