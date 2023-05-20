import React from "react";
import { HeaderSection } from "../Components/HeaderSection";
import { FooterSection } from "../Components/FooterSection";
import { appContext } from "../Helpers/appContext";
import { CardSection } from "../Components/CardSection";
import './styles.css';

function OceaniaPage () {
    const { countries } = React.useContext(appContext); 
    const region = 'Oceania';
    const countryData = countries.filter(country => country.region === region).map(country => ({
        key: country.name.common,
        name: country.translations.spa.common,
        capital: country.capital,
        population: country.population,
        flag: country.flags.svg,
    }));

    return (
        <React.Fragment>
            <HeaderSection title={'Oceania'}/>

            <section className="text-container">
                <p>El continente de la aventura y la exploración.</p>
            </section>

            <main className="main-container--card">
                {countryData.map(country => (
                    <CardSection 
                        key={country.key}
                        name={country.name}
                        flag={country.flag}
                        capital={country.capital}
                    />
                ))}
            </main>

            <FooterSection />
        </React.Fragment>
    );
};

export { OceaniaPage };