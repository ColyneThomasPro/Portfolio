import React, { useState, useEffect } from "react";
import "../style/Header.css";
import moonLogo from "../assets/img/moon.png";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  console.log(showLinks);

  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.scrollY;
      const layers = document.querySelectorAll("[data-type='parallax']");

      for (let i = 0; i < layers.length; i++) {
        const depth = layers[i].getAttribute("data-depth");
        const movement = -(topDistance * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;

        layers[i].style["-webkit-transform"] = translate3d;
        layers[i].style["-moz-transform"] = translate3d;
        layers[i].style["-ms-transform"] = translate3d;
        layers[i].style["-o-transform"] = translate3d;
        layers[i].style.transform = translate3d;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div
        className="stars layer desktop"
        data-type="parallax"
        data-depth="0.0"
      ></div>
      <div
        className="stars3 layer desktop"
        data-type="parallax"
        data-depth="0.0"
      ></div>
      <div
        className="stars2 layer desktop"
        data-type="parallax"
        data-depth="0.00"
      ></div>
      <div
        className="micro-moon layer desktop"
        data-type="parallax"
        data-depth="0.02"
      ></div>
      <div
        className="mini-moon layer desktop"
        data-type="parallax"
        data-depth="0.05"
      ></div>
      <div
        className="middle-moon layer desktop"
        data-type="parallax"
        data-depth="0.08"
      ></div>
      <div
        className="central-moon layer desktop"
        data-type="parallax"
        data-depth="0.15"
      ></div>
      <div
        className="bckgrd-mobile layer mobile"
        data-type="parallax"
        data-depth="0.85"
      ></div>
      <div className="name layer" data-type="parallax" data-depth="0.85">
        Colyne Thomas
      </div>
      <div className="job layer" data-type="parallax" data-depth="0.85">
        Développeuse web
      </div>

      <nav className={` navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        <div>
          <a href="#header">
          <img src={moonLogo} alt="moon" id="navbar-icon" />
          </a>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#profil" className="navbar-link">
              Profil
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projets" className="navbar-link">
              Projets
            </a>
          </li>
          <li className="navbar-item">
            <a href="#competences" className="navbar-link">
              Compétences
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
