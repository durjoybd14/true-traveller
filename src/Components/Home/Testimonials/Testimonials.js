import React, { useEffect, useState } from 'react';
import ReviewsDetails from './ReviewsDetails';


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className="container mt-5">
            <h4 className="container mb-5 text-center">Whats Peoples Told About Us</h4>
            <div className="row">
                {
                    reviews.map(review => <ReviewsDetails key={review._id} review={review}></ReviewsDetails>)
                }
            </div>
        </div>
    );
};

export default Testimonials;