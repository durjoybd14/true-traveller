import React from 'react';
import suitcase from '../../../images/suitcase-outline.png';
import cost from '../../../images/money.png';
import community from '../../../images/community.png';
import fast from '../../../images/runer-silhouette-running-fast.png';
import discussion from '../../../images/chat.png';
import accomodation from '../../../images/resort.png';
import Reason from './ReasonDetails';
const reasons = [
    {
        id: '1',
        name: 'PROFESSIONAL',
        logo: suitcase,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '2',
        name: 'LOW COST',
        logo: cost,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '3',
        name: 'LARGE COUMMUNITY',
        logo: community,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '4',
        name: 'FAST SERVICE',
        logo: fast,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '5',
        name: 'DISCUSSION',
        logo: discussion,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    },
    {
        id: '6',
        name: 'ACCOMODATION',
        logo: accomodation,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!'
    }
]

const WhyChooseUs = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                    <div className="text-center">
                        <h4>Why Choose Us</h4>
                        <p className="text-muted">Here are just a few reasons to choose us</p>
                    </div>
                    <div className="row mt-4">
                        {
                            reasons.map(reason => <Reason key={reason.id} reason={reason}></Reason>)
                        }
                    </div>
                </div>      
        </section>
    );
};

export default WhyChooseUs;