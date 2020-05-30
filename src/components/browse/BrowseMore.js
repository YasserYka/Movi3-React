import React, { Component } from 'react';
import Movies from '../movies/Movies';
import Spinner from '../spinner/Spinner';

class BrowseMore extends Component {


    constructor(props){
        super(props);

        this.state = {
            movies: [],
            searchtriggered: false,
            loadmoretriggered: false,
            loadCount: 0,
            totalLoad: 1
        }

        this.loadmore = this.loadmore.bind(this);
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
                <Movies movies={this.state.movies} />
                { this.state.loadmoretriggered ? <Spinner /> : this.state.movies  && this.state.movies.length !== 0 && this.state.totalLoad > this.state.loadCount ? <button onClick={this.loadmore} className="btn btn-primary btn-lg btn-block mb-3"> Load More </button> : null }
            </React.Fragment>
        )
    }
}

export default BrowseMore;
