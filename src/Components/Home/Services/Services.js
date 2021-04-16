import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [servicesInfo, setServicesInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServicesInfo(data))
    }, [])

    return (
        <section className="container mt-5">
            <h4 className="text-center">Explore best packages</h4>
            <div className="row mt-5">
                {
                    servicesInfo.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;