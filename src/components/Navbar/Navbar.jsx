import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={c.navbar}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={c.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={c.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={c.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={c.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={c.active}>
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={c.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
