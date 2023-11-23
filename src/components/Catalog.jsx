import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";
import { Link } from "react-router-dom";

function Catalog({ addToCart, showAlert, admin }) {
  const [foods, setFoods] = useState([]);

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
    <div className="">
      <div className="grid grid-rows-5 grid-flow-col gap-4 mt-20">
        {foods.map((food) => (
          <div
            key={food.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={food.image} alt={food.name} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {food.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {food.country}
              </p>
              <Link to={`/food/${food.id}`}>
                <button className=" glass inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg hover:bg-cyan-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-950 dark:hover:bg-cyan-950 dark:focus:ring-blue-800 mx-2">
                  Details
                </button>
              </Link>

              {!admin && (
                <button
                  onClick={() => addToCart(food)}
                  className=" glass inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-950 rounded-lg hover:bg-cyan-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-950 dark:hover:bg-cyan-950 dark:focus:ring-blue-800 mx-2"
                >
                  Add to Cart
                </button>
              )}
            </div>
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
            <span className="pl-16">Dish was added to Cart!</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
