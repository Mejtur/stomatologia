import React from 'react'
import "../css/PricesContent.css";
import SinglePrice from './SinglePrice';

function PricesContent({title,prices}) {
    return (
        <div className="pricesContent">
            <div className="pricesContent__title">{title}</div>
            <div className="pricesContent__container">
                {prices.map((item, index) => (
                    <SinglePrice
                        key={index}
                        name={item.name}
                        isBlack={item.dark}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default PricesContent
