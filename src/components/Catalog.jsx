import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function Catalog({ addToCart, showAlert, admin}) {
  const [foods, setFoods] = useState([]);
  console.log(showAlert)

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
      <div className="catalog-grid">
      {foods.map((food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <img src={food.image} alt={food.name} />

          <Link to={`/food/${food.id}`}>
            <button>Details</button>
          </Link>

          {!admin && <button onClick={() => addToCart(food)}>Add to Cart</button>}
        </div>
      ))}
      </div>
        
      <div>
      {showAlert && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      )}

      
    </div>

    </div>
  );
}

export default Catalog;
