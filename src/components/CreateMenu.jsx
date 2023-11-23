import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateMenu.css";


function CreateMenu() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [youtube, setYoutube] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      country: country,
      instructions: instructions,
      image: image,
      youtube: youtube,
    };

    // POST request
    axios
      .post(import.meta.env.VITE_API_URL, requestBody)
      .then((response) => {
        // redirect
        navigate("/managemenus");
      })
      .catch((error) => {
        console.log("Error creating menu in the API...");
        console.log(error);
      });
  };

  return (
    <div className="CreateMenuPage">
      <h1>Add Menu</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="enter the name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <hr />

        <label>
          Country of origin:
          <input
            type="text"
            name="country"
            placeholder="enter the country"
            required={true}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <hr />

        <label>
          How to make:
          <textarea
            id="instructions-create"
            type="text"
            name="instructions"
            placeholder="enter instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>
        <hr />

        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <hr />

        <label>
          Youtube link:
          <input
            type="text"
            name="youtube"
            placeholder="enter YouTube link"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </label>
        <hr />

        <button>Create Menu</button>
      </form>
    </div>
  );
}

export default CreateMenu;
