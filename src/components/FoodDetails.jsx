import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function FoodDetails(){

const [foodDetails, setFoodDetails] = useState([])
const {id} = useParams()

console.log(foodDetails);


useEffect(() => {
    axios.get(`http://localhost:5005/food/${id}`)
    .then((response)=>{
setFoodDetails(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [id])


return(
    <div>
    
    <img src={foodDetails.image} alt={foodDetails.name} />
    <p>Description: {foodDetails.instructions}</p>
    <iframe width="420" height="315"
src='https://www.youtube.com/embed/tgbNymZ7vqY'>
</iframe>
  </div>
)


}






export default FoodDetails;