import React, { useEffect, useState } from "react";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
   const [Manageitems, setManageitems] = useState([]);

   useEffect(() => {
     fetch("http://localhost:5000/manageitem")
       .then((res) => res.json())
       .then((data) => setManageitems(data));
   }, []);

   return (
     <div  className="reviews-color">
       <div className="container gap-5 Inventorys-container pt-5 pb-5  ">
         {Manageitems.map((manageItem) => (
           <ManageItem
             key={manageItem._id}
             manageItem={manageItem}
           ></ManageItem>
         ))}
       </div>
     </div>
   );
};

export default ManageItems;

// const ManageServices = () => {
//     const [services, setServices] = useServices();

//     const handleDelete = id =>{
//         const proceed = window.confirm('Are you sure?');
//         if(proceed){
//             const url = `https://thawing-mountain-91486.herokuapp.com/service/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 const remaining = services.filter(service => service._id !== id);
//                 setServices(remaining);
//             })
//         }
//     }
//     return (
//         <div className='w-50 mx-auto'>
//             <h2>Manage your services</h2>
//             {
//                 services.map(service => <div key={service._id}>
//                     <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                    
//                 </div>)
//             }
//         </div>
//     );
// };

// export default ManageServices;