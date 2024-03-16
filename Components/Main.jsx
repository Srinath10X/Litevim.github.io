"use client";
import "./Main.css";
import { useEffect } from "react";
import Typed from "typed.js";
import Button from "./Buttons/Button";

const Main = () => {
  useEffect(() => {
    const options = {
      strings: ["Type your text here.", "Add more strings as needed."],
      typeSpeed: 50, // Typing speed
      backSpeed: 50, // Backspacing speed
      backDelay: 2000, // Delay before starting to backspace
      startDelay: 1000, // Delay before starting to type after initialization
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed("#typing-element", options);

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <div className="left">
          <h2 className="main-title">Litevim</h2>
          <div className="typed">
            <span id="typing-element"></span>
          </div>
          <p>
            A lightweight, easily configurable Neovim setup for a swift and
            clean editing experience.
          </p>
          <Button />
        </div>
        <div className="right"></div>
      </main>
    </>
  );
};

export default Main;
