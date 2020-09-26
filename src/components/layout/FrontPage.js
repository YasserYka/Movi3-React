import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import Movies from "../movies/Movies.js";
import { Link } from "react-router-dom";

class FrontMovies extends Component {

    state = {
        rows: [
            { 
                url: "http://localhost:8080/api/v1/movies/trending",
                heading: "Movies Being Watched Right Now",
                button: false,
                movies: [],
                icon: "tv" 
            },
            {
                url: "http://localhost:8080/api/v1/movies/trending",
                heading: "Trending",
                button: true,
                movies: [],
                icon: "fire"
            },
            {
                url: "http://localhost:8080/api/v1/movies/mostviewed",
                heading: "Most Viewed",
                button: true,
                movies: [],
                icon: "eye"
            },
            {
                url: "http://localhost:8080/api/v1/movies/toprated",
                heading: "Top Rated",
                button: true,
                movies: [],
                icon: "star"
            },
            {
                url: "http://localhost:8080/api/v1/movies/mostliked",
                heading: "Most Liked",
                button: true,
                movies: [],
                icon: "heart"
            },
        ],
    };

    componentDidMount(){
        this.state.rows.forEach((row, index) => {
            fetch(`${row.url}?page=0&size=6`)
            .then((response) => response.json())
            .then((data) => {
                let newRows = [...this.state.rows];
                newRows[index].movies = data.content;
                this.setState({ rows: newRows });
            });
        });
    }


  render() {
    const { rows } = this.state;

    if(rows === undefined || rows.length === 0)
        return <Spinner />
    else
        return (
            <React.Fragment>
                {
                    rows.map((row, index) => 
                            <div key={index}>
                                <div>
                                    {row.button ? <Link to={{pathname: '/browsemore', state: {url: row.url, heading: row.heading, icon: row.icon}}} className="btn btn-outline-dark float-right"> <i className="fas fa-chevron-right"></i> Browse More </Link> : null}
                                    <h3 className="text-dark text-left mb-4">{row.heading}&nbsp;<i className={`ml-1 fas fa-${row.icon}`} ></i></h3>
                                </div>
                                <Movies movies={row.movies} />
                                <hr className="my-4" />
                            </div>
                        
                    )
                }
            </React.Fragment>
        );
  }
}

export default FrontMovies;
