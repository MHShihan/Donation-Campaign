import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mx-2 md:mx-4 lg:0">
        <Logo></Logo>
        <ul className="flex gap-8 items-center">
          <li className="text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
