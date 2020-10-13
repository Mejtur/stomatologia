import React from 'react'

function SinglePrice({name,price,isBlack}) {
    return (
        <div className="singlePrice">
            <div className={isBlack ? "singlePrice__container grey" : "singlePrice__container"}>
                <p className="singlePrice__name">{name}</p>
                <p className="singlePrice__price">{price}</p>
            </div>
        </div>
    )
}

export default SinglePrice
