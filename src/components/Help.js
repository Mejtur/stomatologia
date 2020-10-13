import React from 'react';
import "../css/Help.css";
import Button from './Button';

function Help({title,subtitle,text, image}) {
    return (
        <div className="help">
            <div className="help__columnContainer">
            <div className="help__column">
                <img src={image} alt="help-img" className="help__image"/>
            </div>
                <div className="help__column">
                    <div className="help__textContainer">
                <p className="help__tag">Stomatologia Nazwa</p>
                <p className="help__title">{title}</p>
                <p className="help__subtitle">{subtitle}</p>
                {text.map((item,index) => (
                    <p key={index} className="help__text">{item}</p>
                    ))}
                    <Button text="UMÓW SIĘ NA PRZEGLĄD STOMATOLOGICZNY" white={true}/>
                    </div>
                    </div>
            </div>
            <div className="help__apointment">
                <p className="help__apointmentTitle">
                    Zapraszamy na wizytę stomatologiczną lub konsultację
                </p>
                <Button text="UMÓW SIĘ"/>
            </div>
        </div>
    )
}

export default Help
