import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";

const Review = (props) => {
  const { name, img, title, rating, sort_details, details_review, date } =
    props.review;
  return (
    <div>
      <Card className="shadow-lg-2 card-information">
        <Card.Img className="img-height" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
          <Card.Text>{details_review}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{date}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Review;