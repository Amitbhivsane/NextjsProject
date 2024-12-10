import React from "react";
import styles from "./header.css";
import writes from "../img/writes.png";
import name from "../img/name.png";
import Icon from "../img/Icon.png";
import Rectang from "../img/Rectang.png";

import Avatar from "../img/Avatar.png";

import Image from "next/image";

const Header = () => {
  return (
    <>
      <header>
        <div className="images">
          <div className="images_left">
            <div>
              <Image src={writes} alt="sing" />
            </div>
            <div>
              <Image src={name} alt="logo" />
            </div>
          </div>

          <div className="images_right">
            <span>
              <input
                type="text"
                className="input-text"
                placeholder="Rechercher un produit"
              />
            </span>
          </div>
          <div className="rightinfo">
            <span>
              <Image src={Rectang} alt="sing" />
            </span>
            <span className="text">Inspirations</span>
            <span className="text">Mes favoris</span>
            <span className="panier">Panier</span>

            <span>
              <Image src={Avatar} alt="sing" />
            </span>
            <span>FR</span>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Art de la table</a>
            </li>
            <li>
              <a href="#">Mobilier</a>
            </li>
            <li>
              <a href="#">Nappage</a>
            </li>
            <li>
              <a href="#">Cuisine</a>
            </li>
            <li>
              <a href="#">Barbecue</a>
            </li>
            <li>
              <a href="#">Tente</a>
            </li>
            <li>
              <a href="#">Chauffage</a>
            </li>
            <li>
              <a href="#">Podium - Piste de danse</a>
            </li>
            <li>
              <a href="#">Son et lumière</a>
            </li>
            <li>
              <a href="#">Packs</a>
            </li>
            <li>
              <a href="#">Consommables</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
