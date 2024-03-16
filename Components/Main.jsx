"use client";
import "./Main.css";
import { useEffect } from "react";
import Typed from "typed.js";
import Button from "./Buttons/Button";
import Image from "next/image";

const Main = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Type your text here.",
        "Add more strings as needed.",
        "Modify them to see the changes",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      cursorChar: "|",
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
            A lightweight, easily configurable Neovim setup for a swift editing
            experience.
          </p>
          <Button />
        </div>
        <div className="right">
          <Image
            src="/litevim.png"
            width={1360}
            height={720}
            alt="Picture of Litevim"
            className="img glow"
          />
        </div>
      </main>
    </>
  );
};

export default Main;
