import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

const Review = (props) => {
  const { name, img, rating, sort_details, details_review, date } =
    props.review;
  return (
    <div>
      <Card className="card-information shadow-lg bg-danger text-white">
        <Card.Img className="img-height" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">Name:{name}</Card.Title>
          <Card.Text className="text-center">
            {sort_details.slice(0, 35)
              ? sort_details.slice(0, 35) + "..."
              : sort_details}
          </Card.Text>
          <p className="text-center">
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </p>
          <Card.Text className="text-center">
            {details_review.slice(0, 90)
              ? details_review.slice(0, 90) + "...."
              : details_review}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-center">{date}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Review;