import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white sticky top-0 shadow-md">
      <div className="container">
        <div className="navbar">
          <div className="flex-1">
            <Link
              to={"/"}
              className="normal-case text-2xl md:text-4xl logo hover:scale-[1.1] duration-500"
            >
              Car Parker
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link
                  className="hover:bg-transparent hover:text-primary focus:bg-transparent font-medium text-gray-500"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="hover:bg-transparent hover:text-primary focus:bg-transparent font-medium text-gray-500"
                  to={"/park"}
                >
                  Park
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
