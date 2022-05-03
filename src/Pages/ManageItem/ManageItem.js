import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ManageItem = ({ manageItem }) => {
  const { _id, name, quantity, suplierName, img, description, price } =
    manageItem;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <Card className="shadow-lg bg-dark text-white">
        <Card.Img className="img-height" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-center">Name:{name}</Card.Title>
          <Card.Text className="text-center">
            Supplier Name : {suplierName}
          </Card.Text>
          <Card.Text className="text-center">Price : {price}</Card.Text>
          <Card.Text className="text-center">Quantity : {quantity}</Card.Text>

          <Card.Text className="text-center">
            {description.slice(0, 80)
              ? description.slice(0, 80) + ".."
              : description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageItem;