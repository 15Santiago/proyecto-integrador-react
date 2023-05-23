import React from "react";
import { HeaderSection } from "../Components/HeaderSection/index";
import { ButtonSection } from "../Components/ButtonSection/index";
import { useNavigate } from 'react-router-dom';
import { FooterSection } from "../Components/FooterSection";
import './styles.css';

function HomePage () {
    const navigate = useNavigate();

    const changeToAmerica = () => {
        navigate('/Americas');
    };
    const changeToEuropa = () => {
        navigate('/Europe');
    };
    const changeToAsia = () => {
        navigate('/Asia');
    };
    const changeToOceania = () => {
        navigate('/Oceania');
    };
    const changeToAfrica = () => {
        navigate('/Africa');
    };

    return (
        <React.Fragment>
            <HeaderSection title={'Datos'}/>
            <main>
                <section className="text-container">
                    <p>Escoge uno de los siguientes contienentes para ver sus paises.</p>
                </section>

                <section className="buttons-container">
                    <ButtonSection 
                        text={'America'} 
                        imageUrl={'../images/earth-america-o-svgrepo-com.svg'}
                        altAtribute={'america-button'}
                        action={changeToAmerica}
                    />
                    <ButtonSection 
                        text={'Europa'} 
                        imageUrl={'../images/globe-showing-europe-svgrepo-com.svg'}
                        altAtribute={'europe-button'}
                        action={changeToEuropa}
                    />
                    <ButtonSection 
                        text={'Asia'} 
                        imageUrl={'../images/earth-asia-oceania-svgrepo-com.svg'}
                        altAtribute={'asia-button'}
                        action={changeToAsia}
                    />
                    <ButtonSection 
                        text={'Oceania'} 
                        imageUrl={'../images/australian-continent-svgrepo-com.svg'}
                        altAtribute={'oceania-button'}
                        action={changeToOceania}
                    />
                    <ButtonSection 
                        text={'Africa'} 
                        imageUrl={'../images/africa-continent-svgrepo-com.svg'}
                        altAtribute={'africa-button'}
                        action={changeToAfrica}
                    />
                </section>
            </main>
            <FooterSection />
        </React.Fragment>
    );
};

export { HomePage };