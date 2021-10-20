import React from "react";
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurant App</p>
        <p className="mt3- text-gray-600">Administra tu restaurant en las siguientes opciones:</p>
      </div>
      <nav>
          <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact to="/">Ordenes</NavLink>
          <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact to="/menu">Menú</NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
