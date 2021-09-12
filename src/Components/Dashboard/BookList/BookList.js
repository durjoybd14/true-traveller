import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import BookListDetails from './BookListDetails';
import { useAuth } from '../../../contexts/Authcontext';

const BookList = () => {
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/orders?email=' + currentUser?.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
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
                    {currentUser && <h4 className="text-center">Dear, {currentUser.displayName} You Previously Orderd These Packages</h4>}
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
                                            <th className="text-secondary" scope="col">Cost</th>
                                            <th className="text-secondary" scope="col">Order Date</th>
                                            <th className="text-secondary" scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            orders.map(order => <BookListDetails order={order} key={order._id} ></BookListDetails>)
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

export default BookList;