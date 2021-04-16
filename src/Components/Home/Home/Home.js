import React from 'react';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Footer from '../../Shared/Footer/Footer';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Testimonials from '../Testimonials/Testimonials';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Hotels></Hotels>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;