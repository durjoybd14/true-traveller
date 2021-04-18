import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [servicesInfo, setServicesInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://mighty-cliffs-97551.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServicesInfo(data)
                setLoading(false)
            })

    }, [])

    return (
        <section className="container mt-5">
            <h4 className="text-center">Explore best packages</h4>
            {
                loading ?
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-center">
                            <img src="https://i.ibb.co/XxBfXMw/spinner-icon-gif-23.gif" style={{ width: '80px' }} alt="" />

                        </div>
                        <div className="col-lg-4"></div>
                    </div> :
                    <div className="row mt-5">
                        {
                            servicesInfo.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                        }
                    </div>
            }
        </section>
    );
};

export default Services;