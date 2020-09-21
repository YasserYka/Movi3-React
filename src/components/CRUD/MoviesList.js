import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
    
    render(){
        const movies = [{movieId: 1, title: "Alpha", release: 2009, uploadDate: "2020, 02"}]

        return (
            <React.Fragment>
                <Link to={'/profile'} className="btn btn-dark mb-3 float-left"> Go Back <i className="fas fa-chevron-right"></i> </Link>
                <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary float-right"><i class="fa fa-plus" aria-hidden="true"></i> Add Movie </button>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New Movie</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Title:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Rating:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Release:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Genres:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Description:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <table class="table table-striped table-dark">
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
                                    <button class="btn btn-danger mr-1"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                    <button class="btn btn-warning mr-1"><i class="fa fa-pencil" aria-hidden="true"></i></button>
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