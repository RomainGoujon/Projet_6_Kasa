import React, { useState } from "react";
import './style.css';
import arrow from '../../assets/Image/arrow/down.png';

function Collapse({collapseTitle , collapseDescription}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <div className="collapse-title-container">
                <div className="collapse-title" onClick={handleClick}>
                    {collapseTitle}
                    <img src={arrow}
                    className={`arrow-icon ${isOpen ? "arrow-up" : "arrow-down"}`}
                    alt="arrow" />
                </div>
            </div>
            <div>
                {isOpen && (
                <div className="collapse-description">{collapseDescription}</div>
                )}
            </div>
        </div>
    );
}

export default Collapse