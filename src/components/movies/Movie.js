import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6">
            <img className="mb-3 responsive" width="150" height="200" src={require('../../../public/images/' + movie.poster)} alt="poster of the movie"></img>
        </div>
    )
}

export default Movie;