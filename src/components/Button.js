import React from "react";
import "../css/Button.css";

function Button({ white, text }) {
  console.log(white);
  return (
    <button className={white ? "btn white" : "btn blue"}>
      {text ? text : "UMÓW SIE NA WIZYTE!"}
    </button>
  );
}

export default Button;
