import React from "react";
import { NavLink } from "react-router-dom";
import homeicon from "../assets/home-icon.png";
import catalog from "../assets/catalog.png";
import manager from "../assets/manager.png";

function Navbar({ callbackToAdmin, admin }) {
  return (
    <nav className="Navbar">
      <NavLink to="/" className="NavIcon">
        <img src={homeicon} alt="Home Icon" />
      </NavLink>

      <NavLink to="/catalog" className="CatalogIcon">
        <img src={catalog} alt="Catalog Icon" />
      </NavLink>

       {admin && (
      <NavLink to="/managemenus" className="ManagerIcon">
        <img src={manager} alt="Manager Icon" />
      </NavLink>
      )}

      <button onClick={callbackToAdmin}>Admin</button>
    </nav>
  );
}

export default Navbar;
