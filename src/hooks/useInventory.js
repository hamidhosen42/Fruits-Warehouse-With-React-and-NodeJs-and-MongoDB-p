import { useEffect, useState } from "react";

const useInventory = () =>{
    const [Inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:5000/manageinventorys")
          .then((res) => res.json())
          .then((data) => setInventory(data));
    }, []);
    return [Inventory, setInventory];
}

export default useInventory;
