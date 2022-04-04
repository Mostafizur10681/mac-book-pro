import React from 'react';
import './HomeReview.css'

const HomeReview = (props) => {
    const { img, name, review, ratings } = props.review
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Review: {review}</p>
                    <p className="card-text">Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;