import React from "react";
import "../css/SingleFeatured.css";
import Button from "./Button";

function SingleFeatured({ title, description, image }) {
  return (
    <div className="singleFeatured">
      <img src={image} alt="image" className="singleFeatured__image" />
      <div className="singleFeatured__textContainer">
        <h1 className="singleFeatured__title">{title}</h1>
        <p className="singleFeatured__description">{description}</p>
        <Button white={true} />
      </div>
    </div>
  );
}

export default SingleFeatured;
