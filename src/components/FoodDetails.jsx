import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <div>
          <h1>Edit the Menu</h1>
          <label>
            Name:
            <input
              type="text"
              name="name"
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
            Country of origin:
            <input
              type="text"
              name="country"
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
            Image:
            <input
              type="text"
              name="image"
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
            How to make:
            <textarea
              type="text"
              name="instructions"
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
            YouTube link:
            <input
              type="text"
              name="youtube"
              value={foodDetails.youtube}
              onChange={(e) =>
                setFoodDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </label>

          <button onClick={editSubmit}>Save Changes</button>
          <button onClick={editToggle}>Cancel Edit</button>
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

                {admin && (
                  <>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary mr-2"
                        onClick={editToggle}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary ml-2"
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
