import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";

function ManageMenus({admin}) {
  const [foods, setFoods] = useState([]);
  console.log(admin)
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
      <>
        <h2>Menus</h2>
        <br />
        <Catalog />

        {admin && (
          <Link to="/managemenus/create">
            <p>
              <button>Create</button>
            </p>
          </Link>
        )}

      </>
    </div>
  );
}

export default ManageMenus;
