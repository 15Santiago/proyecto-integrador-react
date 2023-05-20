import React from "react";
import './Header.css';

function HeaderSection ({title}) {
    return (
        <header className="header-section">
            <h1 className="title">{title}</h1>
        </header>
    );
};

export { HeaderSection };