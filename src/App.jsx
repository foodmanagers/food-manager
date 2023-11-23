import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Catalog from "./components/Catalog";
import ManageMenus from "./components/ManageMenus";
import FoodDetails from "./components/FoodDetails";
import CreateMenu from "./components/CreateMenu";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

function App() {
  const [admin, setAdmin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const roleToggle = () => {
    console.log(admin);
    // common pattern for toggling boolean values in React state-> (miracle, b-ig big miracle, this solved the problem.)
    setAdmin(!admin);
  };

  const addToCart = (FoodDetails) => {
    setCartItems([...cartItems, FoodDetails]);

    setShowAlert(true); // show the sucess alert

    setTimeout(() => {
      setShowAlert(false);
    }, 2000); // timeout to hide the alert
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="App">
        <Navbar callbackToAdmin={roleToggle} admin={admin} cartItems={cartItems} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={<Catalog addToCart={addToCart} showAlert={showAlert} />}
          />
          <Route path="/managemenus/create" element={<CreateMenu />} />
          {/* // Solved the button dont appearing even if the value was true, because it was passing undefined */}
          <Route path="/managemenus" element={<ManageMenus admin={admin} />} />
          <Route
            path="/food/:id"
            element={<FoodDetails admin={admin} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart cartItems={cartItems} emptyCart={emptyCart} />
            }
          />
          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
