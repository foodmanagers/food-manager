import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";

function ManageMenus({admin}) {
  const [foods, setFoods] = useState([]);
  console.log(admin)
  // const VITE_API_URL = "http://localhost:5005/food";

  const getAllMenus = () => {
    axios
      .get(import.meta.env.VITE_API_URL)
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
    <div>
      <>
        <h1>Manager Menu</h1>
        {admin && (
          <Link to="/managemenus/create">
            <p>
              <button>Create</button>
            </p>
          </Link>
        )}
        <hr />
        <Catalog admin={admin} />

        

      </>
    </div>
  );
}

export default ManageMenus;
