import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
    
    render(){
        const movies = [{movieId: 1, title: "Alpha", release: 2009, uploadDate: "2020, 02"}]

        return (
            <React.Fragment>
                <Link to={'/profile'} className="btn btn-dark mb-3 float-left"> Go Back <i className="fas fa-chevron-right"></i> </Link>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary float-right"><i className="fa fa-plus" aria-hidden="true"></i> Add Movie </button>
                
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Movie</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="recipient-name" className="col-form-label">Title:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Rating:</label>
                                        <input type="text" className="form-control" id="message-text"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Release:</label>
                                        <input type="text" className="form-control" id="message-text" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Genres:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="message-text" className="col-form-label">Description:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Movie ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Release</th>
                            <th scope="col">Upload Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => 
                            <tr>
                                <th scope="row">{movie.movieId}</th>
                                <td>{movie.title}</td>
                                <td>{movie.release}</td>
                                <td>{movie.uploadDate}</td>
                                <td>
                                    <button className="btn btn-danger mr-1"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    <button className="btn btn-warning mr-1"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default MoviesList;