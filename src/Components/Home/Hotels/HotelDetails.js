import React from 'react';

const HotelDetails = (props) => {
    const { name, price, img, location } = props.hotelInfo;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group rounded shadow-lg animation mt-4">
                <div className="card p-3 rounded">
                    <img src={img} style={{ height: '220px' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <small className="text-muted">{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;