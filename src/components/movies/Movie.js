import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-4">
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                <img loading="lazy" className="card-img-top mb-3 img-fluid" src={`http://localhost:8080/${movie.posterUrl}`} width="150" alt="poster of the movie"></img> 
                    <h5 className="text-center mb-2">{movie.title}</h5>
                    <div className="d-flex justify-content-between mt-1 mb-1">
                        <p className="ml-1">
                            <strong><i className="fas fa-calendar-alt"> Release</i></strong>: {movie.release}
                            <br/>
                            <strong><i className="fas fa-star"> Rating</i></strong>: {movie.rating}
                        </p>
                        <p className="mr-1">
                            <strong><i className="fas fa-heart"> Like</i></strong>: {movie.likeCount}
                            <br/>
                            <strong><i className="fas fa-eye"> View</i></strong>: {movie.viewCount}
                        </p>
                    </div>
                    <Link to={{pathname: `movie/${movie.movieId}`, movie: movie}} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> Play 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;