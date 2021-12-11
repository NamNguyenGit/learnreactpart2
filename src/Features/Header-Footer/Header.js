import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/todos">
        Todos
      </NavLink>
      <NavLink activeClassName="active" to="/products">
        Products
      </NavLink>
    </nav>
  );
}
export default Header;
