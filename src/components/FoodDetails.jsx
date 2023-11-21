import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FoodDetails.css";

function FoodDetails({ admin }) {
  const [foodDetails, setFoodDetails] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(foodDetails);

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
        navigate("/managemenus"); //--------> the miracle
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

  useEffect(() => {
    console.log(foodDetails);
  }, [foodDetails]);

  return (
    <div className="details-page">
      {editMode ? (
        <div>
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
            Country:
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
            Instructions:
            <textarea
              id="instructions-edit"
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
            YouTube:
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
        <div>
          {foodDetails ? (
            <>
              <h2>{foodDetails.name}</h2>
              <p>{foodDetails.country}</p>
              <img src={foodDetails.image} alt={foodDetails.name} />
              <p>Description: {foodDetails.instructions}</p>
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
              <br />

              {admin && (
                <>
                  <button onClick={editToggle}>Edit</button>
                  <button onClick={deleteFunction}>Delete</button>
                </>
              )}
            </>
          ) : (
            <p>loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FoodDetails;
