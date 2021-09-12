import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/Authcontext";

const Reviews = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { currentUser } = useAuth();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      review: data.review,
      imageURL: imageURL,
    };

    const url = `https://mighty-cliffs-97551.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server response", res));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "5025c7b89b9227cb3def831a08b2a19e");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <SideBar></SideBar>
      </div>
      <div className="p-5 mt-4 col-md-5">
        <h5>Add Review</h5>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={currentUser?.displayName}
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              {...register("review", { required: true })}
              className="form-control"
              placeholder="Write Your Review"
            ></textarea>
            {errors.review && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="mb-3">
            <input type="file" name="upload" onChange={handleImageUpload} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-5"></div>
    </div>
  );
};

export default Reviews;
