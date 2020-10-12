import React,{useState} from 'react'

function HiddenText({ title, description }) {
    const [isHidden,setIsHidden] = useState(false);
    return (
        <div> 
                    <p className="singleServiceText__title" onClick={()=>{setIsHidden(!isHidden)}}>{title}</p>
                    <p className={isHidden? "singleServiceText__description" : "singleServiceText__description hidden"}>{description}</p>
        </div>
    )
}

export default HiddenText
