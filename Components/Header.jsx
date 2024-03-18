"use client";
import React, { useEffect } from "react";
import "./Header.css";
import config from "../config/config.json";

const Header = () => {
  const { Navlink } = config;

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
            {config.Header_logo}
            <span>⚡</span>
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                {Navlink.link1}
              </a>
            </li>
            <li class="nav-item">
              <a href="#ab" class="nav-link">
                {Navlink.link2}
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                {Navlink.link3}
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                {Navlink.link4}
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
              <p className="sun">&#9788;</p>
              <p className="moon">&#9789;</p>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
