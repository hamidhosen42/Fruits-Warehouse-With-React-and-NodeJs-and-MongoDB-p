import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `https://stark-crag-02396.herokuapp.com/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);
  return [inventory, setInventory];
};

export default useInventoryDetail;
