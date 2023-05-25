import React from "react";
import { useParams } from 'react-router-dom';
import { HeaderSection } from '../Components/HeaderSection';
import './styles.css';

function CountryPage () {
    const { countryName, capitalName, population, independent, timezones, continents } = useParams();

    const independentValue = JSON.parse(independent);

    return (
        <div className="country-page-section">
            <HeaderSection title={countryName}/>
            <section className="info-container">
                <p>Capital de {countryName}: {capitalName}</p>
                <p>Población: {population} habitantes</p>
                <p>{!independentValue ? 'El país no está independizado.' : 'El país está independizado.'}</p>
                <p>Zonas horarias:{timezones}</p>
                <p>Continente en el que se encuentra: {continents}</p>
            </section>
        </div>
    );
};

export { CountryPage };