import React from "react";


function Card(prop) {
    return(
    <card>
        <div className = "card">
            <div className="top">
                <p>{prop.name}</p>
            </div>
            <div className="bottom">
                <img src = {prop.url} alt ="well...sorry" />
            </div>
        </div>
    </card>
    )
};

export default Card;