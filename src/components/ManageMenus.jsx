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
    <div className="pt-16">
      <>
        <h1 className="mb-10">Manager Menu</h1>
        {admin && (
          <Link to="/managemenus/create">
              <button className="mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2" >Create</button>
          </Link>
        )}
        <hr />
        <Catalog admin={admin} />

        

      </>
    </div>
  );
}

export default ManageMenus;
