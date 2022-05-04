import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetail";
import { Card } from "react-bootstrap";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useInventoryDetail(inventoryId);

  const handleSubmit = (event) => {
    //   const { Quantity } = inventory.quantity+1;
    const Quantity = {
      quantity: event.target.quantity.value,
    };
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
  };

  return (
    <div className="bg-info pt-5 pb-5">
      <Card className="container w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
        <Card.Img className="img-height" variant="top" src={inventory.img} />
        <Card.Body>
          <Card.Title className="text-center">Name:{inventory.name}</Card.Title>
          <Card.Text className="text-center">ID : {inventory._id}</Card.Text>
          <Card.Text className="text-center">
            Supplier Name : {inventory.suplierName}
          </Card.Text>
          <Card.Text className="text-center">
            Price : {inventory.price}
          </Card.Text>
          <Card.Text className="text-center">SOLD</Card.Text>
          <Card.Text className="text-center">
            Quantity : {inventory.quantity}
          </Card.Text>

          <Card.Text className="text-center">{inventory.description}</Card.Text>
        </Card.Body>
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            className="w-50 p-1 mx-auto"
            type="number"
            name="quantity"
            id=""
            placeholder="Quantity"
            required
          />
          <br />
          <button className="btn mt-3 btn-primary w-50 mx-auto" type="submit">
            Quantity Update
          </button>
        </form>
        {/* <button onClick={handleSubmit} className="btn btn-primary">
            Delivered
          </button> */}
      </Card>
    </div>
  );
};

export default InventoryDetails;