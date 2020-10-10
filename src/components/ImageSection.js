import React from "react";
import "../css/ImageSection.css";
import Logo from "../images/Logo.png";
import Smile from "../images/Smile.png";

function ImageSection() {
  return (
    <div className="imageSection">
      <div className="imageSection__column">
        <div className="imageSection__container">
          <h1 className="imageSection__title">Zdrowy uśmiech to podstawa</h1>
          <p className="imageSection__description">
            Naszym celem jest zdrowy uśmiech u każdego pacjenta. Niezależnie od
            wieku i stanu uzębienia w dniu, w którym rozpoczyna leczenie.
            Dzisiejsza stomatologia daje ogromne możliwości – nawet pacjent z
            dużymi brakami w uzębieniu lub całkowitym bezzębiem może odzyskać
            swój uśmiech.
          </p>
          <p className="imageSection__description">
            Dlatego właśnie stworzyliśmy nowoczesny prywatny gabinet
            stomatologiczny w Nazwa Miasta – Nazwa Stomatologia Mikroskopowa.
            Możemy tu, w komfortowych warunkach, dzielić się z pacjentami swoją
            wiedzą i doświadczeniem wykorzystując w leczeniu najnowszy sprzęt,
            technologie i materiały.
          </p>
          <div className="imageSection__logoContainer">
            <img src={Logo} alt="logo" className="imageSection__logo" />
            <p className="imageSection__logoText">Stomatologia</p>
          </div>
        </div>
      </div>
      <div className="imageSection__column">
        <img src={Smile} alt="smileImg" className="imageSection__image" />
      </div>
    </div>
  );
}

export default ImageSection;
