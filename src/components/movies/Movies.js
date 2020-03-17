import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

class Movies extends Component {



    render () {
        return (
            <Consumer>
                {value => {
                    
                        const { movie_list } = value;
                        return <Spinner />
                    }
                }
            </Consumer>
        )
    }
}


export default Movies;