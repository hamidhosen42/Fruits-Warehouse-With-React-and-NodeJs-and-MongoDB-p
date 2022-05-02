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
      <div id="customer" className="reviews-color">
        <h1 className="text-center pt-5 ">CUSTOMER REVIEW</h1>
        <div className="container gap-5 Inventorys-container mt-5 pb-5  ">
          {reviews.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;