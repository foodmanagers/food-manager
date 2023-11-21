import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Catalog from "./components/Catalog"
import ManageMenus from "./components/ManageMenus"
import FoodDetails from './components/FoodDetails'
import CreateMenu from './components/CreateMenu'
import { useState } from 'react'


function App() {

 const [admin, setAdmin]= useState(false);

  const roleToggle = () => {
    console.log(admin)
     // common pattern for toggling boolean values in React state-> (miracle, big big miracle, this solved the problem.)
     setAdmin(!admin);

  }

  return (
    <>
    <div className='App'>
    <Navbar callbackToAdmin={roleToggle} admin={admin} />

    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* // Solved the button dont appearing even if the value was true, because it was passing undefined */}
          <Route path="/managemenus/create" element={<CreateMenu />} />
          <Route path="/managemenus" element={<ManageMenus admin={admin} />} /> 
          <Route path="/food/:id" element={<FoodDetails />} />
          
    </Routes>
    
    </div>
    </>
  )
}

export default App
