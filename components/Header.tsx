import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <h1>Furniverse</h1>
      <nav className="flex">
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>

          <li>
            <a href="#">
              <MagnifyingGlassCircleIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
