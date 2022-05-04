import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myitem?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);


  const handleUserDelete=(id)=>{
      const proceed=window.confirm("Are you sure you want to delete??");

      if(proceed)
      {
          console.log("Deleting user with id",id);
          const url = `http://localhost:5000/myitem/${id}`;

          console.log(url);

          fetch(url,{
              method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            //   toast("Delete Successfully");
             if(data.deletedCount>0)
             {
                 const remaining=user.filter(user=>user._id!==id);
                setItems(remaining);
             }
          })
      }
  }

  return (
    <div className="p-5 bg-info">
      <h2 className="text-center">TOTAL MY ITEM: {items.length}</h2>

      {items.map((item) => (
        <div key={item._id}>
          <Table className="bg-dark mt-3" striped bordered hover>
            <tbody>
              <tr>
                <td className="text-white">{item.email}</td>
                <td className="text-white">{item.name}</td>
                <td className="text-white">{item.suplierName}</td>
                <td className="text-white">{item.quantity}</td>
                <td className="text-center">
                  <form>
                    <button
                      onClick={() => handleUserDelete(item._id)}
                      className="btn btn-info text-center"
                      type="submit"
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default MyItem;