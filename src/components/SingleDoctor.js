import React from 'react';
import "../css/SingleDoctor.css";

function SingleDoctor({image,name,text}) {
    return (
        <div className="singleDoctor">
            <div className="singleDoctor__column">
                <img src={image} alt="singleDoctor__image" className="singleDoctor__image"/>
            </div>
            <div className="singleDoctor__column">
                <div className="singleDoctor__container">
                    <p className="singleDoctor__name">{name}</p>
                    <ul>
                        {text.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                <button className="singleDoctor__btn">Certyfikaty</button>
                </div>
            </div>
        </div>
    )
}

export default SingleDoctor
