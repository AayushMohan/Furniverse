import React from "react";

const Header = () => {
  return (
    <header className="flex">
      <h1>Furniverse</h1>
      <nav className="">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
