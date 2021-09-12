import React, { useEffect, useState } from 'react';
import {useAuth} from '../../../contexts/Authcontext';
import SideBar from '../SideBar/SideBar';
import AllOrderDetails from './AllOrderDetails';

const AllOrder = () => {
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(true)
    const [totalOrders, setTotalOrders] = useState([]);
    useEffect(() => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setTotalOrders(data)
                setLoading(false)
            })
    }, [])


    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="p-5 mt-5 col-md-10">
                    {currentUser && <h4 className="text-center">Hello, {currentUser.displayName}</h4>}
                    {
                        loading ?
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="text-center col-lg-4">
                                    <img src="https://i.ibb.co/XxBfXMw/spinner-icon-gif-23.gif" style={{ width: '80px' }} alt="" />

                                </div>
                                <div className="col-lg-4"></div>
                            </div> :
                            <div className="mt-5">

                                <table className="table text-center table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-secondary" scope="col">Country</th>
                                            <th className="text-secondary" scope="col">Email</th>
                                            <th className="text-secondary" scope="col">Order Date</th>
                                            <th className="text-secondary" scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            totalOrders.map(totalOrder => <AllOrderDetails totalOrder={totalOrder} key={totalOrder._id}></AllOrderDetails>)
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

export default AllOrder;