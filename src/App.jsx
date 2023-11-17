import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Catalog from "./components/Catalog"
import ManageMenus from "./components/ManageMenus"
import FoodDetails from './components/FoodDetails'

function App() {
  return (
    <>
    <div className='App'>
    <Navbar />

    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/managemenus" element={<ManageMenus />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          
    </Routes>
    
    </div>
    </>
  )
}

export default App
