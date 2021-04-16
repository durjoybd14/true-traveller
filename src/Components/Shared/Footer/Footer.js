import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import paymentPic from '../../../images/payment.png'

const Footer = () => {

    return (
        <footer className="p-5 mt-5">
            <div className="row">
                <div className="col-md-3 mt-3">
                    <h5>Useful Links</h5>
                    <Link className="link" to="/about">About Us</Link><br />
                    <Link className="link" to="/blogs">Blogs</Link><br />
                    <Link className="link" to="/contact">Contact Us</Link><br />
                    <Link className="link" to="#">Terms & Conditions</Link><br />
                    <Link className="link" to="#">Privacy Policy</Link><br />
                    <Link className="link" to="#">Refund & Return Policy</Link><br />
                </div>

                <div className="col-md-6 mt-3">
                    <h5>Our Address</h5>
                    <p>Due to Covid-19 our office is open every Monday 11am-5pm. All services are available online as usual</p>
                    <p>1202 Middle Badda, Dhaka, Bangladesh </p>
                    <h6 className="">Follow us</h6>
                    <ul className="social-media list-inline mt-3 d-flex">
                        <li className="list-inline-item"><a href="https://www.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-3 mt-3">
                    <ul>
                        <h5>Call now</h5>
                        <li>+8801600112233</li>
                        <li>+8801600112244</li>
                        <li>+8801600112255</li>
                    </ul>
                    <img src={paymentPic} style={{width:'260px'}} alt=""/>
                </div>

                <div className="text-center mt-5">
                    <p>Copyright &copy;{(new Date()).getFullYear()} by True Traveller | All Rights Reserved</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;