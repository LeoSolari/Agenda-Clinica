import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/main">Main</NavLink>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/new-user">Nuevo Usuario</NavLink>
          <NavLink to="*">404</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
