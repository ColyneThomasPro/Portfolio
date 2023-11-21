import React, { useEffect } from "react";
import "../style/Header.css";
import moonLogo from "../assets/img/moon.png";
import burgerMenu from "../assets/img/icons/burger-menu.png"

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.scrollY;
      const layers = document.querySelectorAll("[data-type='parallax']");

      for (let i = 0; i < layers.length; i++) {
        const depth = layers[i].getAttribute('data-depth');
        const movement = -(topDistance * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;

        layers[i].style['-webkit-transform'] = translate3d;
        layers[i].style['-moz-transform'] = translate3d;
        layers[i].style['-ms-transform'] = translate3d;
        layers[i].style['-o-transform'] = translate3d;
        layers[i].style.transform = translate3d;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header id="header">   
        <div className="micro-moon layer desktop" data-type="parallax" data-depth="0.02"></div>
        <div className="mini-moon layer desktop" data-type="parallax" data-depth="0.05"></div>
        <div className="middle-moon layer desktop" data-type="parallax" data-depth="0.08"></div>
        <div className="central-moon layer desktop" data-type="parallax" data-depth="0.15"></div>
        <div className="stars layer desktop" data-type="parallax" data-depth="0.0"></div>
        <div className="bckgrd-mobile layer" data-type="parallax" data-depth="1.00"></div>
        <div className="name layer" data-type="parallax" data-depth="0.85">Colyne Thomas</div>
        <div className="job layer" data-type="parallax" data-depth="0.85">Développeuse web</div>

        <nav id="navbar">
          <img src={moonLogo} alt="moon" />
          <ul>
            <li><a href="."></a>Profil</li>
            <li><a href="."></a>Projets</li>
            <li><a href="."></a>Compétences</li>
            <li><a href="."></a>Contact</li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;