import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {

    state = { rows: [] }

    componentDidMount() {        
        this.setState({ 
            rows: [
                {
                    heading: "Recommended for you",
                    movie_list: [
                        {
                            id: 1,
                            title: "WOODY WOODPECKER",
                            description: "SOMETHING SOMETHING",
                            likeCount: 35,
                            relaese: 2009,
                            rating: 2.2,
                            imageUrl: "poster1.jpg", 
                            viewCount: 433
                        }, {
                            id: 2,
                            title: "WAR OF THE COLOSSAL BEAST",
                            description: "SOMETHING SOMETHING",
                            likeCount: 66,
                            relaese: 2006,
                            rating: 3.7,
                            imageUrl: "poster2.jpg", 
                            viewCount: 462
                        }, {
                            id: 3,
                            title: "THE WASP WOMAN",
                            description: "SOMETHING SOMETHING",
                            likeCount: 34,
                            relaese: 2020,
                            rating: 7.4,
                            imageUrl: "poster3.jpg", 
                            viewCount: 2355
                        }, {
                            id: 10,
                            title: "WOODY WOODPECKER",
                            description: "SOMETHING SOMETHING",
                            likeCount: 35,
                            relaese: 2009,
                            rating: 2.2,
                            imageUrl: "poster10.jpg", 
                            viewCount: 433
                        }, {
                            id: 11,
                            title: "WAR OF THE COLOSSAL BEAST",
                            description: "SOMETHING SOMETHING",
                            likeCount: 66,
                            relaese: 2006,
                            rating: 3.7,
                            imageUrl: "poster11.jpg", 
                            viewCount: 462
                        }, {
                            id: 12,
                            title: "THE WASP WOMAN",
                            description: "SOMETHING SOMETHING",
                            likeCount: 34,
                            relaese: 2020,
                            rating: 7.4,
                            imageUrl: "poster12.jpg", 
                            viewCount: 2355
                        }
                    ]
                },
                {
                    heading: "Trending",
                    movie_list: [
                        {
                            id: 4,
                            title: "WEREWOLF IN A GIRLS DORMITORY",
                            description: "SOMETHING SOMETHING",
                            likeCount: 24,
                            relaese: 1988,
                            rating: 5.3,
                            imageUrl: "poster4.jpg", 
                            viewCount: 3455
                        }, {
                            id: 5,
                            title: "WEST WORLD",
                            description: "SOMETHING SOMETHING",
                            likeCount: 5,
                            relaese: 1999,
                            rating: 5.3,
                            imageUrl: "poster5.jpg", 
                            viewCount: 342
                        }, {
                            id: 6,
                            title: "WHO KILLED WHO?",
                            description: "SOMETHING SOMETHING",
                            likeCount: 66,
                            relaese: 1995,
                            rating: 6.1,
                            imageUrl: "poster6.jpg", 
                            viewCount: 244
                        }, {
                            id: 13,
                            title: "WEREWOLF IN A GIRLS DORMITORY",
                            description: "SOMETHING SOMETHING",
                            likeCount: 24,
                            relaese: 1988,
                            rating: 5.3,
                            imageUrl: "poster13.jpg", 
                            viewCount: 3455
                        }, {
                            id: 14,
                            title: "WEST WORLD",
                            description: "SOMETHING SOMETHING",
                            likeCount: 5,
                            relaese: 1999,
                            rating: 5.3,
                            imageUrl: "poster14.jpg", 
                            viewCount: 342
                        }, {
                            id: 15,
                            title: "WHO KILLED WHO?",
                            description: "SOMETHING SOMETHING",
                            likeCount: 66,
                            relaese: 1995,
                            rating: 6.1,
                            imageUrl: "poster15.jpg", 
                            viewCount: 244
                        }
                    ]
                },
                {
                    heading: "Movies being watched right now!",
                    movie_list: [
                        {
                            id: 7,
                            title: "WHITE EAGLE",
                            description: "SOMETHING SOMETHING",
                            likeCount: 35,
                            relaese: 2009,
                            rating: 8.0,
                            imageUrl: "poster7.jpg", 
                            viewCount: 344
                        }, {
                            id: 8,
                            title: "TARANTULIA!",
                            description: "SOMETHING SOMETHING",
                            likeCount: 35,
                            relaese: 2015,
                            rating: 3.5,
                            imageUrl: "poster8.jpg", 
                            viewCount: 435
                        }, {
                            id: 9,
                            title: "The Endless Summer",
                            description: "SOMETHING SOMETHING",
                            likeCount: 52,
                            relaese: 2016,
                            rating: 5.2,
                            imageUrl: "poster9.jpg", 
                            viewCount: 523
                        },                         {
                            id: 16,
                            title: "WEREWOLF IN A GIRLS DORMITORY",
                            description: "SOMETHING SOMETHING",
                            likeCount: 24,
                            relaese: 1988,
                            rating: 5.3,
                            imageUrl: "poster16.jpg", 
                            viewCount: 3455
                        }, {
                            id: 17,
                            title: "WEST WORLD",
                            description: "SOMETHING SOMETHING",
                            likeCount: 5,
                            relaese: 1999,
                            rating: 5.3,
                            imageUrl: "poster17.jpg", 
                            viewCount: 342
                        }, {
                            id: 18,
                            title: "WHO KILLED WHO?",
                            description: "SOMETHING SOMETHING",
                            likeCount: 66,
                            relaese: 1995,
                            rating: 6.1,
                            imageUrl: "poster18.jpg", 
                            viewCount: 244
                        }
                    ]
                }
            ]
        });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
