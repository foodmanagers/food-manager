import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import chef from "/assets/chef.png";

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
    <div className="card w-96 glass mb-8 pt-6 bg-base-200">
      <figure><img  className="w-20 h-auto mb-6" src={chef}/></figure>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <label>
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="enter the name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
        <label>
          <input
            type="text"
            name="country"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="enter the country"
            required={true}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
        <label>
          <textarea
            id="instructions-create"
            type="text-area"
            name="instructions"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="enter instructions"
            required={true}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </label>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
        <label>
          <input
            type="text"
            name="image"
            placeholder="enter image URL"
            required={true}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        </div>
        

        <div className="relative z-0 w-full mb-5 group">
        <label>
          <input
            type="text"
            name="youtube"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="enter YouTube link"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </label>
        </div>
        

        <button className=" glass btn-sm btn-circle bg-cyan-950">+</button>
      </form>
    </div>
  );
}

export default CreateMenu;
