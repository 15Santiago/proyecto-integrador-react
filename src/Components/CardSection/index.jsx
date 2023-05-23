import React from "react";
import './styles.css';

function CardSection ({ name, flag, capital, area, poblation }) {
    return (
        <div className="card-container">
            <img src={flag} alt={`${name}-flag`} className="country-flag"/>
            <section className="principal-info-container">
                <h2 className="name-country">{name}</h2>
                <h4 className="name-capital">Capital: {capital}</h4>
            </section>
            <section className="secondary-info-container">
                <p>Área: {area} km2.</p>
                <p>Población: {poblation} habitantes.</p>
            </section>
        </div>
    );
};

export { CardSection };