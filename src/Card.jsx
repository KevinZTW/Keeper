import React from "react";
import ReactDom from "react-dom";

function Card1(prop) {
    return(
    
        <div className = "card">
            <div className="top">
                <p>{prop.name}</p>
            </div>
            <div className="bottom">
                <img src = {prop.url} alt ="well...sorry" />
            </div>
        </div>
    
    )
};

export default Card1;