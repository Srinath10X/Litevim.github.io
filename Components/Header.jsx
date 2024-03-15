"use client";
import React, { useEffect } from "react";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const handleNavLinkClick = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", handleHamburgerClick);

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document.querySelectorAll(".nav-link").forEach((n) => {
        n.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <header>
        <nav class="navbar">
          <a href="#" class="logo">
            Litevim
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#ab" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <div className="dark">
            <button className="btn">
              {/* <p className="sun">&#9788;</p> */}
              <p className="moon">&#9789;</p>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
