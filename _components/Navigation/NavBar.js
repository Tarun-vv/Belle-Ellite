"use client";

import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      {isOpen ? (
        <>
          <IoCloseOutline className="nav__icon" onClick={handleOpen} />
          <div className="nav__bg">
            <ul className="nav__list">
              <li className="nav__list-item">Home</li>
              <li className="nav__list-item">About</li>
              <li className="nav__list-item">Our Meals</li>
              <li className="nav__list-item">Book a table</li>
            </ul>
          </div>
        </>
      ) : (
        <IoMenuOutline className="nav__icon" onClick={handleOpen} />
      )}
    </div>
  );
}

export default NavBar;
