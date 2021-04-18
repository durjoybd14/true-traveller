import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ManageServiceDetails from './ManageServiceDetails';

const ManageService = () => {
    const [loading, setLoading] = useState(true)
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                setLoading(false)
            })
    }, [])

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5 p-5">
                    <h4 className="text-center">All Services</h4>
                    {
                        loading ?
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4 text-center">
                                    <img src="https://i.ibb.co/XxBfXMw/spinner-icon-gif-23.gif" style={{ width: '80px' }} alt="" />

                                </div>
                                <div className="col-lg-4"></div>
                            </div> :
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
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageService;