import { useEffect, useState } from "react";

const useInventory = () => {
  const [Inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("https://stark-crag-02396.herokuapp.com/manageinventorys")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return [Inventory, setInventory];
};

export default useInventory;