import React, {useState} from "react";

const Card = ({imgSrc}) => {
    const [angle] = useState(Math.floor(Math.random()*360))

    const transform = `rotate(${angle}deg)`
   

    return(
        <img  style={{transform}} className="card" src={imgSrc} alt="" />
    )
}
export default Card
