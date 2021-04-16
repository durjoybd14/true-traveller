import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const NoMatch = () => {
    return (
        <>
            <MenuBar />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">
                        <h1>No Match Found</h1>
                        <h3 className="text-danger"><i className="fa fa-frown-o" aria-hidden="true"></i> Status: 404 <i className="fa fa-frown-o" aria-hidden="true"></i></h3>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NoMatch;