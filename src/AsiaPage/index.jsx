import React from "react";
import { Link } from 'react-router-dom';
import { HeaderSection } from "../Components/HeaderSection";
import { FooterSection } from "../Components/FooterSection";
import { appContext } from "../Helpers/appContext";
import { CardSection } from "../Components/CardSection";
import './styles.css';

function AsiaPage () {
    const { countries } = React.useContext(appContext);
    const region = "Asia";
    const countryData = countries.filter(country => country.region === region).map(country => ({
        key: country.name.common,
        name: country.translations.spa.common,
        capital: country.capital,
        population: country.population,
        flag: country.flags.svg,
        area: country.area,
        independent: country.independent,
        timezones: country.timezones,
        continents: country.continents
    }));

    return (
        <React.Fragment>
            <HeaderSection title={'Asia'}/>

            <section className="text-container">
                <p>La tierra de las religiones y filosofias milenarias.</p>
            </section>

            <main className="main-container--card">
                {countryData.map(country => (
                    <Link 
                        to={`/countries/${country.name}/${country.capital}/${country.population}/${country.independent}/${country.timezones}/${country.continents}`}
                        key={country.key}
                    >
                        <CardSection
                            key={country.key}
                            name={country.name}
                            flag={country.flag}
                            capital={country.capital}
                            area={country.area}
                            poblation={country.population}
                        />
                    </Link>
                ))}
            </main>

            <FooterSection />
        </React.Fragment>
    );
};

export { AsiaPage };