import "./styles/styles.css";
import wordLogo from "../assets/WORD.png";
import { getInTouch } from "../hooks/useContact";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleClick = getInTouch();

  return (
    <header className="header animate__animated animate__fadeIn">
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="navbar__logo" src={wordLogo} alt="Logo Wordplan" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar__ul">
                <li className="navbar__li"><a href="https://github.com/lautiplug">Contribute</a></li>
                <li className="navbar__li"><a href="https://lautitheplug.netlify.com/">How did I create this?</a></li>
                <li className="navbar__li" onClick={handleClick}>
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
