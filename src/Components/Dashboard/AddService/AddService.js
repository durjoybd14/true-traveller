import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {
            name: data.country,
            person: data.person,
            day: data.day,
            date: data.date,
            cost: data.cost,
            included: data.included,
            imageURL: imageURL
        };

        const url = `https://mighty-cliffs-97551.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server response', res))
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5025c7b89b9227cb3def831a08b2a19e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 mt-4 p-5">
                <h5>Add Service</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="mb-3">
                        <input type="text" name="country" className="form-control" defaultValue="" {...register("country", { required: true })} placeholder="Country Name" />
                        {errors.country && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="person" className="form-control" defaultValue="" {...register("person", { required: true })} placeholder="Person Quantity" />
                        {errors.person && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="day" className="form-control" defaultValue="" {...register("day", { required: true })} placeholder="Duration(Day)" />
                        {errors.day && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="date" className="form-control" defaultValue="" {...register("date", { required: true })} placeholder="Travel Date" />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="cost" className="form-control" defaultValue="" {...register("cost", { required: true })} placeholder="Service Charge" />
                        {errors.cost && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input type="text" name="included" className="form-control" defaultValue="" {...register("included", { required: true })} placeholder="Included" />
                        {errors.included && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                        <input type="file" name="upload" onChange={handleImageUpload} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-5"></div>
        </div>
    );
};

export default AddService;