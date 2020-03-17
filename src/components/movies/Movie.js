import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{movie.name}</h5>
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