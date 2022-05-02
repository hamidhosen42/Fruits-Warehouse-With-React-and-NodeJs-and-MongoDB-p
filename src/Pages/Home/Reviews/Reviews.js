import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <div className="bg-info">
        <h1 className="text-center mt-5 pt-3">Customer Reviews</h1>
        <div className="container services-container mt-5 pb-5  ">
          {reviews.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;