import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function Catalog({ addToCart }) {
  const [foods, setFoods] = useState([]);

  // const API_URL = "http://localhost:5005/food"

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="catalog-list">
      {foods.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <img src={food.image} alt={food.name} />

          <Link to={`/food/${food.id}`}>
            <button>Details</button>
          </Link>
          <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
