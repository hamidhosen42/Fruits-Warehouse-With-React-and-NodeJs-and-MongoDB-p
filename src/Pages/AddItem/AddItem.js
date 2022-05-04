import React from "react";
import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const item = {
      email: user.email,
      name: event.target.name.value,
      suplierName: event.target.supplier.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      img: event.target.imgurl.value,
      description: event.target.description.value,
    };

    console.log(item);
    axios.post("http://localhost:5000/additem", item).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your are inventory item add.");
        event.target.reset();
      }
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
            value="Add Inventory"
          />
        </form>
      </Card>
    </div>
  );
};

export default AddItem;