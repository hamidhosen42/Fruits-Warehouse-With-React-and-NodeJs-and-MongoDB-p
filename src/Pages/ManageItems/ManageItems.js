import React, { useEffect, useState } from "react";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
  const [Manageitems, setManageitems] = useState([]);

  useEffect(() => {
    fetch("https://stark-crag-02396.herokuapp.com/manageitem")
      .then((res) => res.json())
      .then((data) => setManageitems(data));
  }, []);

  return (
    <div className="reviews-color">
      <div className="container gap-5 Inventorys-container pt-5 pb-5  ">
        {Manageitems.map((manageItem) => (
          <ManageItem key={manageItem._id} manageItem={manageItem}></ManageItem>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
