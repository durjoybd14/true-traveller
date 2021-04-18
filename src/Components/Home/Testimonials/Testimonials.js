import React, { useEffect, useState } from 'react';
import ReviewsDetails from './ReviewsDetails';


const Testimonials = () => {
    const [loading, setLoading] = useState(true)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [])


    return (
        <div className="container mt-5">
            <h4 className="container mb-5 text-center">Whats Peoples Told About Us</h4>
            {
                loading ?
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-center">
                            <img src="https://i.ibb.co/XxBfXMw/spinner-icon-gif-23.gif" style={{ width: '80px' }} alt="" />

                        </div>
                        <div className="col-lg-4"></div>
                    </div> :
                    <div className="row">
                        {
                            reviews.map(review => <ReviewsDetails key={review._id} review={review}></ReviewsDetails>)
                        }
                    </div>
            }
        </div>
    );
};

export default Testimonials;