import React from "react";
import './Button.css';

function ButtonSection ({text, imageUrl, altAtribute, action}) {
    const handleFunction = () => {
        action();
    };

    return (
        <div className={`button ${altAtribute}`} onClick={handleFunction}>
            <img src={imageUrl} alt={altAtribute} className="image-button"/>
            <h3 className="button-title">{text}</h3>
        </div>
    );
};

export { ButtonSection };