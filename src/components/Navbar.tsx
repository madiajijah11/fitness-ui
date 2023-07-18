import Logo from "../images/logo.png";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
