import React from 'react';
import SideBar from '../SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5">
                    <div className="mt-5 text-center">
                        <h2>Welcome to True Traveller Dashboard</h2>
                        <h5>We are here to help you get started</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;