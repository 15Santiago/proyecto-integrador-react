import React from "react";
import { Link } from 'react-router-dom';
import { HeaderSection } from '../Components/HeaderSection';
import { FooterSection } from "../Components/FooterSection";
import { appContext } from '../Helpers/appContext';
import { CardSection } from "../Components/CardSection";
import './styles.css';

function AmericasPage () {
    const { countries } = React.useContext(appContext);
    const region = 'Americas';
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
            <HeaderSection title={'America'}/>

            <section className="text-container">
                <p>El continente de la divesidad cultural y geográfica.</p>
            </section>

            <main className="main-container--card">
                {countryData.map(country => (
                    <Link to={`/countries/${country.name}`} key={country.key}>
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

export { AmericasPage };