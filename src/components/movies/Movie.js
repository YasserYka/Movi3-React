import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <img className="card-img-top mb-3 img-fluid" src={require('../../../public/images/' + movie.poster)} alt="poster of the movie"></img> 
                    <h5 className="text-center mb-2">{movie.name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-calendar-alt"> Release Date</i></strong>: {movie.release}
                        <br/>
                        <strong><i className="fas fa-star"> Rating</i></strong>: {movie.rating}
                    </p>
                    <Link to={`movie/${movie.id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> Play 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;