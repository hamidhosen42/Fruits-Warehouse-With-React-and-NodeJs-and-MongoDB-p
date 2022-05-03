import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import useInventoryDetail from '../../../hooks/useInventoryDetail';
import { Card } from 'react-bootstrap';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    

    console.log(inventory);

    // const handlePlaceOrder = event =>{
    //     event.preventDefault();
    //     const order = {
    //         email:user.email,
    //         inventory: inventory.name,
    //         inventoryId: inventoryId,
    //         address: event.target.address.value,
    //         phone: event.target.phone.value
    //     }
    //     axios.post('', order)
    //     .then(response =>{
    //         const {data} = response;
    //         if(data.insertedId){
    //             toast('Your order is booked!!!');
    //             event.target.reset();
    //         }
    //     })
    // }

    return (
      <div className="bg-info pt-5 pb-5">
        <Card className="container w-50 mx-auto shadow-lg rounded-3 bg-dark text-white p-4">
          <Card.Img className="img-height" variant="top" src={inventory.img} />
          <Card.Body>
            <Card.Title className="text-center">
              Name:{inventory.name}
            </Card.Title>
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

            <Card.Text className="text-center">
              {inventory.description.slice(0, 80)
                ? inventory.description.slice(0, 80) + ".."
                : inventory.description}
            </Card.Text>
          </Card.Body>
          {/* <button
            onClick={() => navigateToServiceDetail(_id)}
            className="btn btn-primary"
          >
            UPDATE
          </button> */}
        </Card>
        {/* <h2>Please Order: {inventory.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={inventory.name} name="inventory" placeholder='inventory' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>  */}
      </div>
    );
};

export default InventoryDetails;