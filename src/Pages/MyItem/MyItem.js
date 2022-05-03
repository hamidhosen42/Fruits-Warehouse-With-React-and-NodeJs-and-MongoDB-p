import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const email = user?.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [user]);
    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            {
                orders.map(order =><div key={order._id}>
                    <p>{order.email} : {order.service}</p>
                </div>)
            }
        </div>
    );
};

export default MyItem;