import React from "react"
import { NavLink } from "react-router-dom"

function Navbar () {
    return (
        <nav className='Navbar'>
      <NavLink to="/" className="NavIcon">
      <img src="src\assets\home-icon.png" alt="Home Icon" />
      </NavLink>
      <NavLink to="/catalog" className="CatalogIcon">
      <img src="src\assets\catalog.png" alt="Catalog Icon" />
      </NavLink>
      <NavLink to="/managemenus" className="ManagerIcon">
      <img src="src\assets\manager.png" alt="Manager Icon" />
      </NavLink>
    </nav>
    )

}

export default Navbar