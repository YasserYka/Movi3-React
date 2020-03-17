import React from 'react'

const Movie = (props) => {

    const { movie } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{movie.name}</h5>

                </div>
            </div>
        </div>
    )
}

export default Movie;