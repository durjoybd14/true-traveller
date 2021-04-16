import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ManageServiceDetails from './ManageServiceDetails';

const ManageService = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5 p-5">
                    <h4 className="text-center">All Services</h4>
                    <div className="mt-5">

                        <table className="table table-borderless text-center">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Country</th>
                                    <th className="text-secondary" scope="col">Cost</th>
                                    <th className="text-secondary" scope="col">Date</th>
                                    <th className="text-secondary" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allServices.map(allService => <ManageServiceDetails allService={allService} key={allService._id}></ManageServiceDetails>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;