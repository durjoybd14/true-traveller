import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IeGjvINoMfSFYtp8AfrETeunUPxqvb5CT9boxhyfKfu1uYqsmECYT4XbLLhYrAmYwV4TayJ2cwZqw6aWFFG9g2S00UcORVD3A');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;