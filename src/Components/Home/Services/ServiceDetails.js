import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetails = (props) => {
    const { name, imageURL, cost, included, person, day, date, _id } = props.service;
    const history = useHistory();
    const handleBuyNow = (id) => {
        const url = `/book/${id}`;
        history.push(url);
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group rounded shadow-lg mt-3 animation">
                <div className="card p-3 rounded">
                    <img src={imageURL} style={{height:'220px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Country: {name}</h5>
                        <p className="card-text">Person: {person}</p>
                        <p className="card-text">Day: {day} days</p>
                        <p className="card-text">Date: {date}</p>
                        <p className="card-text">Service Charge: {cost} BDT</p>
                        <small className="text-muted">Included: {included}</small><br />
                        <button className="button mt-5" onClick={() => handleBuyNow(_id)}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;