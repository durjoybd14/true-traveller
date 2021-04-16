import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = (props) => {
    const { country, imageURL, cost, included, person, day, date } = props.service;

    return (
        <div className="col-md-4">
        <div className="card-group rounded shadow-lg">
            <div className="card p-3 rounded mt-3">
                <img src={imageURL} className="card-img-top" id="rotate-animation" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Country: {country}</h5>
                    <p className="card-text">Person: {person}</p>
                    <p className="card-text">Day: {day} days</p>
                    <p className="card-text">Date: {date}</p>
                    <p className="card-text">Service Charge: {cost} BDT</p>
                    <small className="text-muted">Included: {included}</small><br/>
                    <button className="button mt-5">Book Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetails;