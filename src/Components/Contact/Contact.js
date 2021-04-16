import React from 'react';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';

const Contact = () => {
    return (
        <>
            <div className="container">
                <MenuBar></MenuBar>
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 shadow p-5">
                        <h5>Leave Your Message</h5>
                        <form>
                            <div className="form-group mt-3">
                                <label htmlFor="">Email</label>
                                <input name="email" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Message</label>
                                <textarea name="message"className="form-control" rows="4"></textarea>
                            </div>
                            <button className="button mt-3 px-4">Send</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Contact;