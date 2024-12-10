import React from "react";
import footer from "./footer.css";
// import writes from "../img/writes.png";
// import name from "../img/name.png";
import Image from "next/image";
// import inst from "../img/inst.png";
// import linkedin from "../img/linkedin.png";
// import twitt from "../img/twitt.png";
import writes from "../../../../public/writes.png";
import name from "../../../../public/name.png";
import inst from "../../../../public/inst.png";
import linkedin from "../../../../public/linkedin.png";
import twitt from "../../../../public/twitt.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <div className="footer-item">
            <p>
              <Image src={writes} alt="sing" />
            </p>
            <p>
              <Image src={name} alt="logo" />
            </p>
          </div>
          <div className="footer-item">
            <h2>INFOS PRATIQUES </h2>
            <p>
              <a href=""> À propos</a>
            </p>
            <p>
              <a href=""> Livraisons & Reprises </a>
            </p>
            <p>
              <a href=""> Mode d’emploi </a>
            </p>
            <p>
              <a href=""> F.A.Q </a>
            </p>
          </div>
          <div className="footer-item">
            <h2>LÉGAL</h2>
            <p>
              <a href=""> Mentions légales </a>
            </p>
            <p>
              <a href=""> CGU </a>
            </p>
            <p>
              <a href=""> CGV </a>
            </p>
            <p>
              <a href=""> Politique de confidentialité </a>
            </p>
          </div>
          <div className="footer-item">
            <h2>MON COMPTE</h2>
            <p>
              <a href=""> Accéder à mon compte </a>
            </p>
            <p>
              <a href=""> Ma liste d’envie </a>
            </p>
            <p>
              <a href=""> Créer un compte </a>
            </p>
            <p>
              <a href=""> Mot de passe oublié </a>
            </p>
          </div>
          <div className="footer-item social">
            <h2> NOUS SUIVRE</h2>
            <ul>
              <li>
                <Image src={twitt} alt="tweet" />
              </li>
              <li>
                <Image src={inst} alt="insta" />
              </li>
              <li>
                <Image src={linkedin} alt="link" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
