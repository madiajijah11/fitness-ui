import Logo from "../images/logo.png";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { FaBars, FaRegCircleXmark } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="logo" />
        </Link>
        <ul
          className={`
          nav__links ${isNavShowing ? "show__nav" : "hide__nav"}
        `}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <FaRegCircleXmark /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
