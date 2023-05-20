import React from "react";
import { HeaderSection } from "../Components/HeaderSection";
import { FooterSection } from "../Components/FooterSection";
import { appContext } from "../Helpers/appContext";
import { CardSection } from "../Components/CardSection";
import './styles.css';

function AfricaPage () {
    const { countries } = React.useContext(appContext);
    const region = 'Africa';
    const countryData = countries.filter(country => country.region === region).map(country => ({
        key: country.name.common,
        name: country.translations.spa.common,
        capital: country.capital,
        population: country.population,
        flag: country.flags.svg,
        area: country.area,
    }));

    return (
        <React.Fragment>
            <HeaderSection title={'Africa'}/>

            <section className="text-container">
                <p>La cuna de la humanidad y la diversidad cultural.</p>
            </section>

            <main className="main-container--card">
                {countryData.map(country => (
                    <CardSection 
                        key={country.key}
                        name={country.name}
                        flag={country.flag}
                        capital={country.capital}
                        area={country.area}
                        poblation={country.population}
                    />
                ))}
            </main>

            <FooterSection />
        </React.Fragment>
    );
};

export { AfricaPage };