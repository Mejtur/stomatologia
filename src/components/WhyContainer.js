import React from "react";
import Button from "./Button";
import { RiMicroscopeLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";
import "../css/WhyContainer.css";

function WhyContainer() {
  return (
    <div className="why">
      <h1 className="why__title">Dlaczego warto nam zaufać?</h1>
      <div className="why__container">
        <div className="why__item">
          <RiMicroscopeLine className="why__logo" />
          <p className="why__containerTitle">Precyzyjne leczenie</p>
          <p className="why__containerText">
            Leczenie kanałowe pod najlepszym na świecie mikroskopem Zeiss Extaro
            pozwala nam osiągnąć doskonałą precyzję i uratować niejeden ząb!
          </p>
        </div>
        <div className="why__item">
          <AiOutlineHeart className="why__logo" />
          <p className="why__containerTitle">Bezboleśnie i komfortowo</p>
          <p className="why__containerText">
            Bardzo dbamy o komfort pacjenta podczas wizyty. Stosujemy najlepsze
            znieczulenia, a w razie potrzeby oferujemy leczenie stomatologiczne
            w narkozie.
          </p>
        </div>
        <div className="why__item">
          <GrDiamond className="why__logo" />
          <p className="why__containerTitle">Przeprowadzamy metamorfozy</p>
          <p className="why__containerText">
            Cyfrowe projektowanie uśmiechu pozwala zaplanować rezultaty
            leczenia, a licówki i korony porcelanowe odmieniły wygląd niejednego
            pacjenta!
          </p>
        </div>
      </div>
      <Button />
    </div>
  );
}

export default WhyContainer;
