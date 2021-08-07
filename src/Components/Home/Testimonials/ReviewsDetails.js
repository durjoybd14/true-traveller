import React from 'react';

const ReviewsDetails = (props) => {
    const { name, review, imageURL } = props.review;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group">
                <div className="card p-3 rounded shadow-lg animation mt-3">
                    <div className="d-flex justify-content-around align-items-center">
                        <img src={imageURL} style={{ width: '80px', height: '80px', borderRadius: '50%' }} alt="..." />
                        <div>
                            <h6>{name}</h6>
                            <span style={{ color: 'gold' }}><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-muted text-center">{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDetails;