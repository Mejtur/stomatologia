import React from 'react'
import "../css/SingleServiceText.css";
import HiddenText from './HiddenText';

function SingleServiceText({ text, containerTitle }) {
    return (
        <div className="singleServiceText">
            <h1 className="singleServiceText__containerTitle">{containerTitle}</h1>
            <div className="singleServiceText__container">
                {text.map((item, index) =>  (
                    <HiddenText key={index} title={item.title} description={item.description}/>
                )
            )}
            </div>
        </div>
    )
}

export default SingleServiceText
