import React, { Component } from 'react';

class Browse extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            rating: '',
            genre: '',
            release: ''
        }

        this.submit = this.submit.bind(this);
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
            prarms.append("release", this.state.release);

        fetch('http://localhost:8080/api/v1/movies/advancedsearch?' + prarms.toString())
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <input onChange={(e) =>  this.setState({ title: e.target.value })} type="text" class="form-control mb-3" placeholder="Title" />

                <div class="form-group">
                    <select id="rating" onChange={(e) => { this.setState({ rating: e.target.value })}} class="form-control mb-3">
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
                    <select onChange={(e) => { this.setState({ genre: e.target.value })}} class="form-control mb-3">
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

                <input onChange={(e) => this.setState({ release: e.target.value })} type="text" class="form-control mb-3" placeholder="Release" />

                <button type="submit" class="btn btn-secondary btn-lg btn-block"> Search </button>
            </form>
        )
    }
}

export default Browse;
