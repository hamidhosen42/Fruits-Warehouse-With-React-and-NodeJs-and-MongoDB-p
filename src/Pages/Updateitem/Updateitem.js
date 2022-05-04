import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Card } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Updateitem = () => {
  const { updateitemId } = useParams();
  const [user] = useAuthState(auth);
  const [updateInvantory, setUpdateInvantory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/updateitem/${updateitemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateInvantory(data));
  }, [updateitemId]);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const suplierName = event.target.supplier.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const img = event.target.imgurl.value;
    const description = event.target.description.value;

    const item = { name, suplierName, price, quantity, img, description };

    const url = `http://localhost:5000/updateitem/${updateitemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Your are inventory item update.");
        event.target.reset();
      });
  };

  return (
    <div className="bg-info pt-5 pb-5">
      <Card className="container w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
        <form onSubmit={handlePlaceOrder}>
          <input
            className="p-2 mt-3 w-100"
            type="text"
            value={user?.displayName}
            placeholder="name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="p-2 mt-3 w-100"
            type="email"
            value={user?.email}
            name="email"
            placeholder="email"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="p-2 mt-3 w-100"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <input
            className="p-2 mt-3 w-100"
            type="text"
            name="supplier"
            placeholder="Supplier Name"
            required
          />
          <br />
          <input
            className="p-2 mt-3 w-100"
            type="number"
            name="price"
            placeholder="Price"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="p-2 mt-3 w-100"
            type="text"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <input
            className="p-2 mt-3 w-100"
            type="img"
            name="imgurl"
            placeholder="Photo URL"
            required
          />
          <br />
          <textarea
            className="p-2 mt-3 w-100"
            name="description"
            placeholder="Description"
            required
          ></textarea>
          <input
            className="p-2 w-100 fw-bold  mt-3 bg-info rounded tw-bold"
            type="submit"
            value="Update Inventory"
          />
        </form>
      </Card>
    </div>
  );
};

export default Updateitem;