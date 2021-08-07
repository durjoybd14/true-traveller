import React from 'react';

const ReasonDetails = (props) => {
    const { name, logo, text } = props.reason;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div className="card mb-3 p-3 shadow-lg animation" style={{ height: '20rem' }}>
                <div className="text-center my-auto">
                    <img src={logo} style={{ width: '100px' }} alt="..." />
                    <h6 className="card-title mt-2">{name}</h6>
                <div className="card-body overflow-auto">  
                    <p className="text-muted">{text}</p>
                </div>  
                </div>
            </div>
        </div>
    );
};

export default ReasonDetails;