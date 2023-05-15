import React, { useState } from "react";
import "./style.css";
import nextArrow from "../../assets/Image/arrow/next.png";
import previousArrow from "../../assets/Image/arrow/previous.png";

function Carousel({ pictures }) {
    const [ currentPicture, setCurrentPicture ] = useState(0);

    function changePicture(direction) {
        if (direction === "next") {
            setCurrentPicture((prevPicture) => (prevPicture +1) % pictures.length);
        } else if (direction === "previous") {
            setCurrentPicture((prevPicture) => prevPicture === 0 ? pictures.length - 1 : prevPicture - 1);
        };
    }

    return (
        <div className="carousel">
            <img 
            className="previous-arrow arrowImg"
            src={previousArrow}
            alt="Previous"
            onClick={() => changePicture("previous")}
            />

            <img 
            className="picture"
            src={pictures[currentPicture]}
            alt="Current"
            />

            <img
            className="next-arrow arrowImg"
            src={nextArrow}
            alt="Next"
            onClick={() => changePicture("next")}
            />
            
            <p className="numbers">{currentPicture + 1} / {pictures.length}</p>
        </div>
        
    );
};

export default Carousel