import React from 'react';
import { Link } from 'react-router-dom';

const InformationCard = (props) => {

    const { informations } = props;
    console.log(informations)

    return (
            <div className="card gedf-card mt-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-auto">
                            <img className="card-img" style={{height: "100%", maxWidth: "150px"}} src={`http://localhost:8080/${informations.posterUrl}`}  alt="Poster of the movie"></img> 
                        </div>
                        <div className="col-auto">
                            <div className="card-body">
                                <h5 className="card-title"> <strong> {informations.title} ({informations.release}) </strong> </h5>
                                <p className="card-text">{informations.description}</p>
                            </div>
                            <ul className="list-group list-group-horizontal">
                                    <li className="list-group-item"><strong><i className="fas fa-star mr-1"> </i></strong> {informations.rating}</li>
                                    <li className="list-group-item"><strong><i className="fas fa-calendar-alt mr-1"> </i></strong> {informations.release}</li>
                                    <li className="list-group-item"><strong><i className="fas fa-heart mr-1"> </i></strong> {informations.likeCount}</li>
                                    <li className="list-group-item"><strong><i className="fas fa-eye mr-1"> </i></strong> {informations.viewCount}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default InformationCard;