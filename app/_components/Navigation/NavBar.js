"use client";

import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import CurrentUser from "../CurrentUser";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
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
              <li>
                <Link href="/" className="nav__list-item" onClick={handleOpen}>
                  Home
                </Link>
              </li>
              <li className="nav__list-item">About</li>
              <li className="nav__list-item">Our Meals</li>

              <li>
                <Link
                  className="nav__list-item"
                  href="/tables"
                  onClick={handleOpen}
                >
                  Book a table
                </Link>
              </li>

              <li>
                <Link
                  className="nav__list-item"
                  href="/reservations"
                  onClick={handleOpen}
                >
                  Your Reservations
                </Link>
              </li>
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
