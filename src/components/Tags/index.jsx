import React from "react";
import './style.css';

function Tag({tag}) {
    return (
        <div className="tag-container">
            <div className="tag">
                {tag}
            </div>
        </div>
    )
};

export default Tag