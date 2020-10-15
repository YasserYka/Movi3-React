import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesList extends Component {

    state = {
        movies: [],
        movieToEdit: null
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/v1/movies?page=0&size=12")
            .then(response => response.json())
                .then(data => this.setState({ movies: data.content }));
    }

    delete(id){
        fetch(`http://localhost:8080/api/v1/movies/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok)
                    throw response;
                else
                    this.setState({ movies: this.state.movies.filter(movie => movie.movieId !== id) })
            });
    }

    RenderEditModal(){
        return (
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={() => {this.edit()}} type="button" className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    RenderAddModal(){
        return (
            <React.Fragment>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary float-right"><i className="fa fa-plus" aria-hidden="true"></i> Add Movie </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Rating:</label>
                                        <input type="text" className="form-control" id="message-text"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Release:</label>
                                        <input type="text" className="form-control" id="message-text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Genres:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Description:</label>
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
            </React.Fragment>
        )
    }
    
    render(){

        const { movies } = this.state;

        return (
            <React.Fragment>
                <Link to={'/profile'} className="btn btn-dark mb-3 float-left"> Go Back <i className="fas fa-chevron-right"></i> </Link>
                
                { this.RenderEditModal() }

                { this.RenderAddModal() }

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
                        {movies.map((movie, index) => 
                            <tr key={index} >
                                <th scope="row">{movie.movieId}</th>
                                <td>{movie.title}</td>
                                <td>{movie.release}</td>
                                <td>{movie.uploadDate}</td>
                                <td>
                                    <button onClick={() => { this.delete(movie.movieId) }} className="btn btn-danger mr-1"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    <button onClick={() => { this.setState({movieToEdit: movie}) }} data-toggle="modal" data-target="#editModal" className="btn btn-warning mr-1"><i className="fa fa-pencil" aria-hidden="true"></i></button>
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