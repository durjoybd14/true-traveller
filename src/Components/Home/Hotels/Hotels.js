import React from 'react';
import turkey from '../../../images/turkey.jpg';
import egypt from '../../../images/egypt.jpg';
import bali from '../../../images/bali.jpeg';
import HotelDetails from './HotelDetails';

const hotelsInfo = [
    {
        id: 1,
        name: 'Istanbul Sydney Hotel',
        img: turkey,
        price: '3000 BDT/night',
        location: 'Istanbul Turkey.'
    },
    {
        id: 2,
        name: 'Ramses Hilton',
        img: egypt,
        price: '5000 BDT/night',
        location: 'Cairo Governorate, Egypt.'
    },
    {
        id: 3,
        name: 'Bali Bohemia',
        img: bali,
        price: '1300 BDT/night',
        location: 'Kabupaten Gianyar Bali, Indonesia.'
    }
]


const Hotels = () => {
    return (
        <section className="container mt-5">
            <h4 className="text-center">Explore Our Top Hotels</h4>
            <div className="row mt-5">
                {
                    hotelsInfo.map(hotelInfo => <HotelDetails key={hotelInfo.id} hotelInfo={hotelInfo}></HotelDetails>)
                }
            </div>
        </section>
    );
};

export default Hotels;