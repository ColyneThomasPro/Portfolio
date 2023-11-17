import React from "react";
import "../style/Profil.css";
import profilPic from "../assets/img/profil.png";

function Profil() {
  return (
    <>
      <section id="profil-section">
        <img src={profilPic} alt="profil portrait" />
        <div className="presentation">
          <h3 className="purple-bold-txt">Enchanté !</h3>
          <p>
            Je suis Colyne Thomas, <span className="purple-bold-txt">développeuse web</span> passionnée par l'art du code
            et la création digitale.</p>
            <p>De la conception à la réalisation, je
            m'efforce de traduire les idées en lignes de code, créant ainsi des
            expériences utilisateur fluides et esthétiquement plaisantes. Ma
            démarche proactive me permet de m'adapter rapidement à divers
            projets, qu'il s'agisse de développement front-end, back-end ou de
            la création d'applications web.</p>
            <p>Mon objectif est de participer
            activement à la réalisation de vos projets web, en apportant ma
            <span className="purple-bold-txt"> créativité</span>, ma <span className="purple-bold-txt">détermination</span> et ma volonté constante de
            perfectionnement. Je suis convaincue que chaque projet est une
            occasion d'apprendre et de progresser, et j'ai hâte de contribuer à
            votre réussite.</p>
            <p>N'hésitez pas à me contacter pour discuter de vos
            idées et explorer ensemble les possibilités offertes par le monde du
            développement web. Je suis enthousiaste à l'idée de <span className="purple-bold-txt">relever de
            nouveaux défis</span> et de créer des solutions innovantes pour vos besoins
            numériques.</p> 
        </div>
      </section>
    </>
  );
}

export default Profil;
