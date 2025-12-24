import React from "react";
import Container from "../Container/Container";
import logoImage from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="py-5 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-3 py-2 mx-2 transition-all duration-200
     ${
       isActive
         ? "border-b-2 border-[#8152E9] text-[#8152E9]"
         : "border-b-2 border-transparent hover:border-[#8152E9]"
     }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apps"
                    className={({ isActive }) =>
                      `px-3 py-2 mx-2 transition-all duration-200
                  ${
                    isActive
                      ? "border-b-2 border-[#8152E9] text-[#8152E9]"
                      : "border-b-2 border-transparent hover:border-[#8152E9]"
                  }`
                    }
                  >
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/installation"
                    className={({ isActive }) =>
                      `px-3 py-2 mx-2 transition-all duration-200
                    ${
                      isActive
                        ? "border-b-2 border-[#8152E9] text-                      [#8152E9]"
                        : "border-b-2 border-transparent    hover:border-[#8152E9]"
                    }`
                    }
                  >
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex justify-start items-center gap-2">
              <img className="w-10" src={logoImage} alt="" />
              <h4
                className="font-bold text-2xl bg-gradient-to-r from-[#8152E9] to-[#9B5EF1] 
               bg-clip-text text-transparent"
              >
                HERO.IO
              </h4>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 font-medium text-xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 mx-2 transition-all duration-200
     ${
       isActive
         ? "border-b-2 border-[#8152E9] text-[#8152E9]"
         : "border-b-2 border-transparent hover:border-[#8152E9]"
     }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    `px-3 py-2 mx-2 transition-all duration-200
                  ${
                    isActive
                      ? "border-b-2 border-[#8152E9] text-[#8152E9]"
                      : "border-b-2 border-transparent hover:border-[#8152E9]"
                  }`
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    `px-3 py-2 mx-2 transition-all duration-200
                    ${
                      isActive
                        ? "border-b-2 border-[#8152E9] text-                      [#8152E9]"
                        : "border-b-2 border-transparent    hover:border-[#8152E9]"
                    }`
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Chayon-Chandra?tab=repositories",
                  "_blank"
                )
              }
              className="btn bg-gradient-to-r from-[#8152E9] to-[#9B5EF1] text-white font-medium text-2xl py-5 px-6"
            >
              Contribute
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
