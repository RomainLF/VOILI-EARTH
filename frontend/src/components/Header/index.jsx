/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SHeader from "./style";
import img from "../pictures/pictos/ProfilBlanc.png";
import img2 from "../pictures/pictos/PanierBlanc.png";
import imgcoeur from "../pictures/pictos/coeur.png";
import imgplace from "../pictures/pictos/emplacement.png";
import imgglobe from "../pictures/pictos/globe.png";
import imgloupe from "../pictures/pictos/loupe.png";
import NavPanier from "./NavPanier/index";
import NavSearch from "./NavSearch/index";

export default function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  // Click sur panier
  const [isOpen, setIsOpen] = useState();
  // Click sur loupe
  const [isOpenSearch, setIsOpenSearch] = useState();

  return (
    <SHeader>
      <nav className="nav">
        <div onClick={navToggle} className={icon}>
          <div className="line1" />
          <div className="line3" />
        </div>
        <Link to="/">
          <div className="nav__brand"> Voili Earth</div>
        </Link>
        <ul className={active}>
          <li className="connect">
            <img src={img} className="picto2" alt="img" />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="sc1">
              Se connecter
            </a>
          </li>
          <li className="homme">
            <Link to="/Homme">Homme</Link>
          </li>
          <li className="femmes">Femmes</li>

          <li className="enfants">
            <Link to="/Monde">Monde</Link>
          </li>

          <li className="maison">La maison</li>
          <li className="cadeaux">
            <Link to="/Cadeaux">Cadeaux</Link>
          </li>
          <li className="wor">World of rl</li>
          <li className="services">Services</li>
          <div className="footerNav">
            <li className="preferes bleu">
              <img src={imgcoeur} alt="imgcoeur" />
              Préférés
            </li>
            <li className="magasins bleu">
              <img src={imgplace} alt="imgplace" />
              Magasins
            </li>
            <li className="fr bleu">
              <img src={imgglobe} alt="imgglobe" />
              FR Français
            </li>
          </div>
        </ul>
        <section className="header_icons">
          <div
            className="Loupe__picto"
            onClick={() => {
              setIsOpenSearch(!isOpenSearch);
            }}
          >
            <img src={imgloupe} alt="imgloupe" className="correction" />
            <NavSearch openSearch={isOpenSearch} />
          </div>

          <div className="compte__picto">
            <img src={img} alt="img" className="picto" />
          </div>

          <div
            className="Panier__picto"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={img2} alt="img2" className="picto" />
            <NavPanier open={isOpen} />
          </div>
        </section>
      </nav>
    </SHeader>
  );
}
