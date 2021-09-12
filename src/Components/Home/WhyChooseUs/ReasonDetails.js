import React from 'react';

const ReasonDetails = (props) => {
    const { name, logo, text } = props.reason;
    return (
        <div className="mt-3 col-lg-4 col-md-6 col-sm-12">
            <div className="card-group">
            <div className="p-3 mb-3 shadow-lg card animation" style={{ height: '20rem' }}>
                <div className="my-auto text-center">
                    <img src={logo} style={{ width: '100px' }} alt="..." />
                    <h6 className="mt-2 card-title">{name}</h6>
                <div className="overflow-auto card-body">  
                    <p className="text-muted">{text}</p>
                </div>  
                </div>
            </div>
            </div>
        </div>
    );
};

export default ReasonDetails;