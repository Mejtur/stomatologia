import React from 'react'
import "../css/SingleService.css";

function SingleService({title,description,descriptionDots,image}) {
    return (
        <div className="singleService">
            <div className="singleService__column">
                <img src={image} alt="singleServiceImage" className="singleService__image"/>
            </div>
            <div className="singleService__column">
                <div className="singleService__container">

                <p className="singleService__brand">Stomatologia nazwa</p>
                <p className="singleService__title">{title}</p>
                <p className="singleService__description">{description}</p>
                <ul>
                    {descriptionDots.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleService
