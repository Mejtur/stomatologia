import React from "react";
import "../css/Button.css";

function Button({ white }) {
  console.log(white);
  return (
    <button className={white ? "btn white" : "btn blue"}>
      OMÓW SIĘ NA WIZYTĘ
    </button>
  );
}

export default Button;
