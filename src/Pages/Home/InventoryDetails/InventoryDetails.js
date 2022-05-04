import React from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetail";
import { Card, Nav } from "react-bootstrap";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const [inventory] = useInventoryDetail(inventoryId);
  

  const handleDwlivers = () => {
    let inventoryquantity;
    if (inventory.quantity - 1 >= 0) {
      inventoryquantity = inventory.quantity - 1;
    }
    const uantity = {
      quantity: inventoryquantity.toString(),
    };
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleSubmit = (event) => {
    const e =
      parseInt(event.target.quantity.value) + parseInt(inventory.quantity);
    const Quantity = {
      quantity: e.toString(),
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
        console.log(data);
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
        <form className="text-center" onSubmit={handleDwlivers}>
          <button className="btn mt-3 btn-primary w-50 mx-auto">
            Delivered
          </button>
        </form>
      </Card>
      <Card className="container mt-5 w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
        <Nav.Link
          className="btn btn-info fw-bold text-dark mt-3"
          as={Link}
          to="/manageinventorys"
        >
          Manage Inventories
        </Nav.Link>
      </Card>
      <Card className="container mt-5 w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
        <Nav.Link
          className="btn btn-info fw-bold text-dark mt-3"
          as={Link}
          to="/additem"
        >
          Add new item
        </Nav.Link>
      </Card>
    </div>
  );
};

export default InventoryDetails;