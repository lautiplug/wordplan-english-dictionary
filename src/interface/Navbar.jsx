import "./styles/styles.css";
import wordLogo from "../assets/WORD.png";
import { getInTouch } from "../hooks/useContact";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const handleClick = getInTouch();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar__left">
            <a className="navbar-brand" href="#">
              <img
                className="navbar__logo"
                src={wordLogo}
                alt="Logo Wordplan"
              />
            </a>
          </div>
          <div className="navbar__right">
            <button
              className={`navbar-toggler ${menuOpen ? "active" : ""}`}
              onClick={handleToggle}
            >
              {menuOpen ? (
                <button className="btn-close" alt="Close Icon" />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
            <ul className={`navbar__ul ${menuOpen ? "active" : ""}`}>
              <li className="navbar__li">
                <a target="_blank" href="https://github.com/lautiplug">Contribute</a>
              </li>
              <li className="navbar__li">
                <a target="_blank" href="https://lautiplug.netlify.app/project/English-Vocabulary">
                  How did I create this?
                </a>
              </li>
              <li className="navbar__li" onClick={handleClick}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
