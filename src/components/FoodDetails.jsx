import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import chef from "../assets/chef.png"; 

function FoodDetails({ admin }) {
  const [foodDetails, setFoodDetails] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/${id}`)
      .then((response) => {
        setFoodDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteFunction = () => {
    axios
      .delete(import.meta.env.VITE_API_URL + `/${id}`)
      .then(() => {
        navigate("/managemenus");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editToggle = () => {
    setEditMode(!editMode);
  };

  const editSubmit = () => {
    const updatedData = {
      image: foodDetails.image,
      instructions: foodDetails.instructions,
      name: foodDetails.name,
      country: foodDetails.country,
      youtube: foodDetails.youtube,
    };

    // Perform API call to update the food details
    axios
      .put(import.meta.env.VITE_API_URL + `/${id}`, updatedData)
      .then((response) => {
        console.log("Food details updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating food details:", error);
      })
      .finally(() => {
        // After the API call, toggle back to non-edit mode
        setEditMode(false);
      });
  };

  useEffect(() => {}, [foodDetails]);

  return (
    <div>
      {editMode ? (
        <div  className="card w-96 glass mb-8 pt-6 bg-base-200 pt-10">
          <figure><img  className="w-20 h-auto mb-6" src={chef}/></figure>

          <label>
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={foodDetails.name}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <hr />

          <label>
            <input
              type="text"
              name="country"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={foodDetails.country}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <hr />

          <label>
            <input
              type="text"
              name="image"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={foodDetails.image}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <hr />

          <label>
            <textarea
              type="text-area"
              name="instructions"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={foodDetails.instructions}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>
          <hr />

          <label>
            <input
              type="text"
              name="youtube"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={foodDetails.youtube}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <button className="glass mt-2 bg-blue-800" onClick={editSubmit}>Save</button>
          <button className="glass mt-2 bg-blue-800" onClick={editToggle}>Cancel</button>
        </div>
      ) : (
        // Display mode
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-2">
          <figure>
            <img className="w-screen h-auto" src={foodDetails.image} />
          </figure>

          {foodDetails ? (
            <div className="card-body">
              <>
                <h2 className="card-title justify-center">
                  {foodDetails.name}
                </h2>
                <p>{foodDetails.country}</p>
                <p className="ml-8">{foodDetails.instructions}</p>

                <br />
                
                {/*buttons that appear with admin */}
                {admin && (
                  <>
                    <div className="card-actions justify-end">
                      <button
                        className="glass mt-2 bg-blue-800"
                        onClick={editToggle}
                      >
                        Edit
                      </button>
                      <button
                        className="glass mt-2 bg-blue-800"
                        onClick={deleteFunction}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </>
            </div>
          ) : (
            <p>loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FoodDetails;
