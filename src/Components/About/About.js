import React from 'react';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';
import founder from '../../images/founder.jpg';

const About = () => {
    return (
        <>
            <div className="container">
                <MenuBar></MenuBar>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-md-12 p-5" >
                        <h2>About Us</h2>
                        <h4>Welcome To True Traveller</h4>
                        <p className="text-muted text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, maiores voluptatem quasi mollitia quam dolores tempora numquam vero animi libero odio asperiores cum illo facilis illum et ratione. Officia rerum cumque quisquam dolorem similique ab minima reprehenderit dolore at. Nemo delectus dicta perspiciatis alias nam vero aperiam incidunt vitae a.</p>
                        <div className="text-center">
                            <img src={founder} style={{ width: '300px',borderRadius:'10px' }} alt="" />
                            <h5 className="mt-3">Md Naimur Rahman Durjoy</h5>
                            <h6 className="mt-3">CEO & Founder</h6>
                            <p className="text-muted">True Traveller</p>
                            <p className="text-muted">Graduate From Jashore University of Science and Technology, Jashore, Bangladesh. </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;