import React from "react";
import "../style/Contact.css";
import localisation from "../assets/img/icons/localisation.png"
import phone from "../assets/img/icons/phone.png";
import email from "../assets/img/icons/Email.png";
import linkedin from "../assets/img/icons/Linkedin.png";
import github from "../assets/img/icons/Github.png";

function Contact() {
  return (
    <footer id="contact">
        <section id="footer-contact" className="bckgrd-layer-footer">
          <h2 className="underline-small">Contact</h2>
          <div className="contact-info" >
            <ul>
              <li>
                <img src={localisation} alt="localisation icon" />Bordeaux, France
              </li>
              <li>
                <img src={phone} alt="phone icon" />06 99 38 47 05
              </li>
              <li>
                <img src={email} alt="mail icon" />colyne.thomas300403@gmail.com
              </li>
              <li className="underline-small"></li>
            </ul>
          </div>
          <h4 className="networks-title">Réseaux</h4>
          <div className="networks">
            <ul>
              <li><a href="https://www.linkedin.com/in/colyne-thomas/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a></li>
              <li><a href="https://github.com/ColyneThomasPro" target="_blank" rel="noreferrer"><img src={github} alt="github icon" /></a></li>
            </ul>
          </div>
        </section>
        <div className="blck-separation-lign"></div>
        <section id="footer-mention" className="bckgrd-layer">
          <div className="footer-nav-container">
          <h4>Navigation</h4>
            <div className="footer-nav">
              <ul>
                <li><a href="/Profil">Profil</a></li>
                <li><a href="/Projets">Projets</a></li>
                <li><a href="/Compétences">Compétences</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mention-container">
          <h4>Mention</h4>
            <div className="mention">
              <ul>
                <li>Pexels</li>
                <li>RawPixel</li>
                <li>Vecteezy</li>
              </ul>
            </div>
          </div>
        </section>
    </footer>
  );
}

export default Contact;
