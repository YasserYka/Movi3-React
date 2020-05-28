import React, { Component } from 'react';

class Quicksearch extends Component {

    constructor(props){
        super(props);

        this.state = {
            results: [],
            query: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        if(event)
            event.preventDefault();

        this.setState({query: event.target.value}, () => this.fetchQuery(this.state.query));
    }

    fetchQuery(query){
        fetch('http://localhost:8080/api/v1/movies/advancedsearch?title=' + query)
            .then(response => response.json())
                .then(data => this.setState({results: data}));
    }

    submit(){}

    render () {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input list="results" onChange={this.onChange} name="query" className="form-control mr-sm-2" type="search" id="quicksearch" placeholder="Search By Title" />
                <datalist id="results">
                    {
                        this.state.results.map(result => <option value={result.title}></option> )
                    }
                </datalist>
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default Quicksearch;
