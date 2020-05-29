import React, { Component } from 'react';
import Movies from '../movies/Movies'
import Spinner from '../spinner/Spinner';

class Browse extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            rating: '',
            genre: '',
            release: '',
            movies: [],
            searchtriggered: false,
            loadmoretriggered: false,
            loadCount: 0,
            prarms: null,
            totalLoad: 1
        }

        this.loadSize = 6;

        this.submit = this.submit.bind(this);
        this.loadmore = this.loadmore.bind(this);
    }

    submit(event){
        if(event)
            event.preventDefault();

        let prarms = new URLSearchParams();

        if(this.state.rating !== '' && this.state.rating !== 'Rating')
            prarms.append('rating', this.state.rating.slice(0, 1));

        if(this.state.genre !== '' && this.state.genre !=='Genre')
            prarms.append("genre", this.state.genre);

        if(this.state.title !== '')
            prarms.append("title", this.state.title);

        if(this.state.release !== '')
            prarms.append("release", this.state.released);

        this.setState({prarms: prarms});

        fetch(`http://localhost:8080/api/v1/movies/advancedsearch?page=${this.state.loadCount}&size=6` + prarms.toString())
            .then(response => response.json())
                .then(data => {console.log(data); this.setState({totalLoad: data.totalPages, loadCount: this.state.loadCount + 1, movies: data.content, searchtriggered: true, loadmoretriggered: false})});
    }

    loadmore(){
        this.setState({loadmoretriggered: true});

        fetch(`http://localhost:8080/api/v1/movies/advancedsearch?page=${this.state.loadCount}&size=6` + this.state.prarms.toString())
            .then(response => response.json())
                .then(data => this.setState({movies: this.state.movies.concat(data.content), loadmoretriggered: false, loadCount: this.state.loadCount + 1}));
    }

    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.submit} className="mb-5">
                    <input onChange={(e) =>  this.setState({ title: e.target.value })} type="text" className="form-control mb-3" placeholder="Title" />

                    <div class="form-group">
                        <select id="rating" onChange={(e) => { this.setState({ rating: e.target.value })}} className="form-control mb-3">
                            <option defaultValue>Rating</option>
                            <option>9+</option>
                            <option>8+</option>
                            <option>7+</option>
                            <option>6+</option>
                            <option>5+</option>
                            <option>4+</option>
                            <option>3+</option>
                            <option>2+</option>
                            <option>1+</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <select onChange={(e) => { this.setState({ genre: e.target.value })}} className="form-control mb-3">
                            <option defaultValue>Genre</option>
                            <option>Horror</option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Adventure</option>
                            <option>Crime</option>
                            <option>Romance</option>
                            <option>Documetary</option>
                            <option>Anime</option>
                        </select>
                    </div>

                    <input onChange={(e) => this.setState({ release: e.target.value })} type="text" className="form-control mb-3" placeholder="Release" />

                    <button type="submit" className="btn btn-secondary btn-lg btn-block"> Search </button>
                </form>

                { this.state.movies && this.state.movies.length === 0 ? (this.state.searchtriggered ? <Spinner /> : null) : <Movies movies={this.state.movies} /> }

                { this.state.loadmoretriggered ? <Spinner /> : this.state.movies  && this.state.movies.length !== 0 && this.state.totalLoad > this.state.loadCount ? <button onClick={this.loadmore} className="btn btn-primary btn-lg btn-block mb-3"> Load More </button> : null }
            </React.Fragment>
        )
    }
}

export default Browse;
