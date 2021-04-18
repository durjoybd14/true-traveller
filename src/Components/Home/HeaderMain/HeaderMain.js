import React from 'react';
import banner from '../../../images/banner.png';

const HeaderMain = () => {
    return (
        <main className="container d-flex align-items-center justify-content-center py-5">
            <div className="row">
                <div className="col-md-6 p-5">
                    <h2>Get the Qualitiful Travel Package at Cheapest Price Here</h2>
                    <p className="text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit at enim dolores tempora totam nesciunt quis itaque excepturi voluptatibus ...</p>
                    <button className="button mt-3">Learn More</button>
                </div>
                <div className="col-md-6" >
                    <img src={banner} alt="" className="img-fluid" style={{ borderRadius: "25%", opacity: "0.8" }} />
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;