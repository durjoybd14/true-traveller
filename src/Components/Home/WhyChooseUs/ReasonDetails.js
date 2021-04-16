import React from 'react';

const ReasonDetails = (props) => {
    const { name, logo, text } = props.reason;
    return (
        <div className="col-md-4 mt-2">
            <div className="card mb-3 p-3 shadow-lg animation" style={{ height: '230px'}}>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <img src={logo} style={{ width: '100px' }} alt="..." />
                    </div>
                    <div>
                        <div className="card-body" >
                            <h5 className="card-title">{name}</h5>
                            <p className="text-muted">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonDetails;