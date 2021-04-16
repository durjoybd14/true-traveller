import React from 'react';

const BlogsContent = (props) => {
    const { name, img, text } = props.blog;
    return (
        <div className="col-md-12 mt-3">
            <div className="card-group">
                <div className="card p-3 rounded shadow">
                    <div className="d-flex justify-content-around align-items-center">
                        <div>
                            <h6>{name}</h6>
                            <p className="text-muted">CEO & Founder,True Traveller</p>
                        </div>
                        <img src={img} style={{ width: '150px', height: '120px', borderRadius: '5px' }} alt="..." />
                    </div>
                    <div className="card-body">
                        <p className="card-text text-muted">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsContent;