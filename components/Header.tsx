import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#D7D0CB] flex justify-around items-center p-4">
      <h1>furniverse</h1>
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

          <li>
            <a href="#">
              <MagnifyingGlassCircleIcon className="h-6" />
            </a>
          </li>
          <li>
            <HeartIcon className="h-6 " />
          </li>
          <li>
            <ShoppingBagIcon className="h-6 bg-white" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
