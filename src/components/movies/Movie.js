import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <img className="card-img-top mb-3 img-fluid" src={`http://localhost:8080/${movie.imageUrl}`} alt="poster of the movie"></img> 
                    <h5 className="text-center mb-2">{movie.title}</h5>
                    <div className="d-flex justify-content-around">
                        <p className="card-text m-2">
                            <strong><i className="fas fa-calendar-alt"> Release Date</i></strong>: {movie.release}
                            <br/>
                            <strong><i className="fas fa-star"> Rating</i></strong>: {movie.rating}
                        </p>
                        <p className="card-text m-2">
                            <strong><i className="fas fa-heart"> Likes</i></strong>: {movie.likeCount}
                            <br/>
                            <strong><i className="fas fa-eye"> Views</i></strong>: {movie.viewCount}
                        </p>
                    </div>
                    <Link to={`movie/${movie.originalFilename}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> Play 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;