import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";
import "../styles/NavBar.css";
import { LuSunDim } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";

function NavBar() {
  const { selectTheme, selectTheming } = useContext(themeContext);

  return (
    <nav id="nav-bar">
      <div className="linkPanel">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Explore
        </NavLink>
      </div>

      <div className="buttonPanel">
        <button onClick={selectTheming}>
          {selectTheme == "Light" ? (
            <IoMdMoon size={20} />
          ) : (
            <LuSunDim size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
