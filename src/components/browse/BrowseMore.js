import React, { Component } from 'react';
import Movies from '../movies/Movies';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';

class BrowseMore extends Component {

    state = {
        movies: [],
        searchtriggered: false,
        loadmoretriggered: false,
        loadCount: 0,
        totalLoad: 1
    }

    componentDidMount(){
        fetch(`${this.props.location.state.url}?page=${this.state.loadCount}&size=6`)
            .then(response => response.json())
                .then(data => this.setState({totalLoad: data.totalPages, loadCount: this.state.loadCount + 1, movies: data.content, loadmoretriggered: false}));
    }

    loadmore(){
        this.setState({loadmoretriggered: true});

        fetch(`${this.props.location.state.url}?page=${this.state.loadCount}&size=6`)
            .then(response => response.json())
                .then(data => this.setState({movies: this.state.movies.concat(data.content), loadmoretriggered: false, loadCount: this.state.loadCount + 1}));
    }

    render () {
        return (
            <React.Fragment>
                <Link to='/' className="btn btn-outline-dark float-right"> <i className="fas fa-home"></i> Home </Link>
                <h2 className="text-dark text-left mb-4">{this.props.location.state.heading}&nbsp;<i className={`ml-1 fas fa-${this.props.location.state.icon}`} ></i></h2>
                <Movies movies={this.state.movies} />
                { this.state.loadmoretriggered ? <Spinner /> : this.state.movies  && this.state.movies.length !== 0 && this.state.totalLoad > this.state.loadCount ? <button onClick={this.loadmore.bind(this)} className="btn btn-primary btn-lg btn-block mt-3 mb-3"> Load More </button> : null }
            </React.Fragment>
        )
    }
}

export default BrowseMore;
