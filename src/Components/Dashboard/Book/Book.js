import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment';
import { Link } from 'react-router-dom';


const Book = ({ handlePayment }) => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [shippingData, setshippingData] = useState(null);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [noOrder, setNoOrder] = useState(true);


    const onSubmit = data => {
        setshippingData(data)
    };

    const [selectedPackage, setSelectedPackage] = useState({});
    useEffect(() => {
        fetch(`https://mighty-cliffs-97551.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedPackage(data[0])
                setNoOrder(false)
                console.log(data);
            })

    }, [])

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            ...selectedPackage,
            ...shippingData,
            paymentId,
            orderTime: new Date().toDateString()
        };

        fetch('https://mighty-cliffs-97551.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ orderDetails: orderDetails, email: loggedInUser.email, status: { state: 'Pending' } })
        })
            .then(res => res.json())
            .then(data => {
                setOrderSuccess(data);
                if (data) {
                    alert("YAY! Your Order Placed Successfully")
                }
            })

    }


    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            {noOrder ?
                <div className="col-md-10 mt-4 p-5 text-center">
                    <h2>Dear, {loggedInUser.userName}</h2>
                    <h3>Please, Go Back to  <Link to="/home">Home</Link> Page and Book Your Package</h3>
                    <h5>Have a Nice Day!</h5>
                </div> :
                <div className="col-md-10 mt-4 p-5">
                    {orderSuccess ?

                        <div >
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 text-center">
                                    <img className="rounded shadow" src="https://media3.giphy.com/media/f7kkcJ4L9t15HBmuMZ/giphy.gif" alt="" />
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div> :
                        <div className="col-md-10 mt-4 p-5">
                            <h5>Book Your Package</h5>
                            <div className="row">
                                <div style={{ display: shippingData ? 'none' : 'block' }} className="col-lg-6">
                                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)} >
                                        <div className="mb-3">
                                            <input name="userName" defaultValue={loggedInUser.userName} className="form-control" {...register("userName", { required: true })} placeholder="Your Name" />
                                            {errors.userName && <span className="error text-danger">Name is required</span>}
                                        </div>
                                        <div className="mb-3">
                                            <input name="email" defaultValue={loggedInUser.email} className="form-control" {...register("email", { required: true })} placeholder="Your Email" />
                                            {errors.email && <span className="error text-danger">Email is required</span>}
                                        </div>
                                        <div className="mb-3">
                                            <input name="address" className="form-control" {...register("address", { required: true })} placeholder="Your Address" />
                                            {errors.address && <span className="error text-danger">Address is required</span>}
                                        </div>
                                        <div className="mb-3">
                                            <input name="phone" className="form-control" {...register("phone", { required: true })} placeholder="Your Phone Number" />
                                            {errors.phone && <span className="error text-danger">Phone Number is required</span>}
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div style={{ display: shippingData ? 'block' : 'none' }} className="col-lg-6 mt-3">
                                    <h5 className="mt-2">Please pay {selectedPackage.cost} BDT for your package</h5>
                                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Book;