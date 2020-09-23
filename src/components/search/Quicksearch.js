import React, { Component } from 'react';

class Quicksearch extends Component {

    state = {
        results: [],
        query: ''
    }

    onChange(event){
        if(event)
            event.preventDefault();

        this.setState({query: event.target.value}, () => this.fetchResults(this.state.query));
    }

    fetchResults(query){
        fetch('http://localhost:8080/api/v1/movies/quicksearch?title=' + query)
            .then(response => response.json())
                .then(data => this.setState({results: data}) );
    }

    submit(){}

    render () {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input list="results" onChange={this.onChange.bind(this)} name="query" className="form-control mr-sm-2" type="search" id="quicksearch" placeholder="Search By Title" autoComplete="off" />
                <datalist id="results">
                    { this.state.results.map((result, index) => <option key={index} value={result.title}></option> ) }
                </datalist>
            </form>
        )
    }
}

export default Quicksearch;
