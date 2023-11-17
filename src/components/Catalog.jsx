import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css"

function Catalog() {
  const [foods, setFoods] = useState([]);
 
  const API_URL = "http://localhost:5005/food" 
 
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className='catalog-list'>
      {foods.map((food) => (
        <div key={food.id}>
          <h1>{food.name}</h1>
          <img src={food.image} alt={food.name} />
          {/* <p>{food.instructions}</p> */}
          <p>dish origin: {food.country}</p>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
