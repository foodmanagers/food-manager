import React from "react";
import { NavLink } from "react-router-dom";
import homeicon from "../assets/home-icon.png";
import catalog from "../assets/catalog.png";
import manager from "../assets/manager.png";


function Navbar({ callbackToAdmin, admin, cartItems }) {
  return (
    <div>

      <div className="navbar bg-blue-800 fixed top-0 left-0 right-0 pb-5">
        <div className="flex-1">
          <button className="btn btn-ghost text-xl">
            <NavLink to="/">
              <img className="w-10" src={homeicon} alt="Home Icon" />
            </NavLink>
          </button>
          <button className="btn btn-ghost text-xl">
            <NavLink to="/catalog">
              <img className="w-10 mb-8" src={catalog} alt="Catalog Icon" />
            </NavLink>
          </button>
           
          {admin && (
            <button className="btn btn-ghost text-xl">
          <NavLink to="/managemenus" className="ManagerIcon">
          <img className="w-10" src={manager} alt="Manager Icon" />
          </NavLink>
          </button>
        )}
          
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartItems.length}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">Number of items: {cartItems.length}</span>
                
                <span className="text-info"></span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <NavLink to="/cart">View cart</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={callbackToAdmin}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Admin
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
