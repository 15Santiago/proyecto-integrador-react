import React from "react";
import { useParams } from 'react-router-dom';
import './styles.css';

function CountryPage () {
    const { countryName } = useParams();

    return (
        <React.Fragment>
            {/* <div className="country-page-section">
                <section className="country-page--image-section">
                    <img src={map} alt={`map-${name}`} />
                </section>
                <img src={flag} alt={`flag-${name}`} />
            </div> */}
        </React.Fragment>
    );
};

export { CountryPage };