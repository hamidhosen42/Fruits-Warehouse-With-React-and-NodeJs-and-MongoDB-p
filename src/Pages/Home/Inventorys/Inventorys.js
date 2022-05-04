import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import "./Inventorys.css";

const Inventorys = () => {
  const [Inventorys, setInventorys] = useState([]);

  useEffect(() => {
    fetch("https://stark-crag-02396.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventorys(data));
  }, []);

  return (
    <div id="Inventorys" className="reviews-color">
      <h1 className=" text-center pt-5"> OUR INVENTORYS</h1>
      <div className="container gap-5 Inventorys-container mt-5 pb-5  ">
        {Inventorys.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventorys;
