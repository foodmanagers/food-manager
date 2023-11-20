import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";

function ManageMenus() {
  const [foods, setFoods] = useState([]);

  const API_URL = "http://localhost:5005/food";

  const getAllMenus = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllMenus();
  }, []);

  return (
    <div className="catalog-list">
      <h2>Menus</h2>

      <Link to="/managemenus/create">
        <p>
          <button>Create Menu</button>
        </p>
      </Link>

      {foods.map((food) => {
        <div className="menucard" key={food.id}>
          <Link to={`/foods/${food.id}`}>
            <h3>{food.name}</h3>
          </Link>
        </div>;
      })}
    </div>
  );
}

export default ManageMenus;
