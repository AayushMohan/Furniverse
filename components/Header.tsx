import {
  HeartIcon,
  MagnifyingGlassCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#D7D0CB] flex justify-around">
      <h1>Furniverse</h1>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>

          {/* <li>
            <a href="#">
              <MagnifyingGlassCircleIcon className="h-10" />
            </a>
          </li>
          <li>
            <HeartIcon className="h-10" />
          </li>
          <li>
            <ShoppingBagIcon className="h-10" />
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
