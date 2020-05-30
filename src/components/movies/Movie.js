import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-4">
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                <img className="card-img-top mb-3 img-fluid" src={`http://localhost:8080/${movie.posterUrl}`} width="150" alt="poster of the movie"></img> 
                    <h5 className="text-center mb-2">{movie.title}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-calendar-alt"> Release</i></strong>: {movie.release}
                        <br/>
                        <strong><i className="fas fa-star"> Rating</i></strong>: {movie.rating}
                        likeCount
                        viewCount
                    </p>
                    <Link to={`movie/${movie.movieId}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> Play 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;