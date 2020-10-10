import React from "react";
import "../css/Footer.css";
import Logo from "../images/Logo.png";
import Button from "./Button";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <div className="footer__contactContainer">
          <div className="footer__text">
            <p className="footer__title">Kontakt i rejestracja wizyt</p>
            <p className="footer__description">tel: 000 000 000</p>
            <p className="footer__title">Tu jesteśmy</p>
            <p className="footer__description">Nazwa stomatologia</p>
            <p className="footer__description">ul. Ulica 21</p>
            <p className="footer__description">Nazwa Miasta</p>
            <Button />
          </div>
        </div>
        <div className="footer__contactContainer">
          <p className="footer__title">Ważne informacje</p>
          <p className="footer__description">Polityka prywatnosci & cookies</p>
          <p className="footer__description">Cennik</p>
          <p className="footer__description">Blog dla pacjentów</p>
        </div>
      </div>
      <div className="footer__about">
        <div className="footer__logoContainer">
          <img src={Logo} alt="logo" className="footer__logo" />
          <p className="footer__logoText">Stomatologia</p>
        </div>
        <div className="footer__text">
          <p className="footer__title">O nas</p>
          <p className="footer__description">
            Stomatologia Walas to nowoczesny prywatny gabinet stomatologiczny w
            Rudzie Śląskiej. Oferujemy nie tylko podstawowe usługi
            stomatologiczne, ale także precyzyjne leczenie kanałowe pod
            mikroskopem, leczenie zębów w narkozie oraz implanty
            stomatologiczne.
          </p>
          <p className="footer__title">Media społecznościowe</p>
          <p className="footer__description">facebook</p>
        </div>
        <div className="footer__copyright">
          2020 Stomatologia Nazwa Nazwa Copyright{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
