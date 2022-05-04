import React from "react";
import { Card } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import { useNavigate } from "react-router-dom";

const Manageinventory = () => {
  const [Inventory, setInventory] = useInventory();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stark-crag-02396.herokuapp.com/manageinventorys/${id}`;
      console.log(url);

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = Inventory.filter((service) => service._id !== id);
          setInventory(remaining);
        });
    }
  };

  const navigateToServiceDetail = (id) => {
    navigate(`/updateitem/${id}`);
  };

  return (
    <div className="reviews-color">
      <div className="container gap-5 Inventorys-container pt-5 pb-5  ">
        {Inventory.map((manageItem) => (
          <Card className="shadow-lg bg-dark text-white">
            <Card.Img
              className="img-height"
              variant="top"
              src={manageItem.img}
            />
            <Card.Body>
              <Card.Title className="text-center">
                Name:{manageItem.name}
              </Card.Title>
              <Card.Text className="text-center">
                Supplier Name : {manageItem.suplierName}
              </Card.Text>
              <Card.Text className="text-center">
                Price : {manageItem.price}
              </Card.Text>
              <Card.Text className="text-center">
                Quantity : {manageItem.quantity}
              </Card.Text>
            </Card.Body>
            <button
              onClick={() => handleDelete(manageItem._id)}
              className="btn btn-info fw-bold text-dark mt-3"
            >
              Delate
            </button>
            <button
              onClick={() => navigateToServiceDetail(manageItem._id)}
              className="btn btn-info fw-bold text-dark mt-3"
            >
              Update Item
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Manageinventory;
