import React from "react";
import { HeaderSection } from "../Components/HeaderSection/index";
import { ButtonSection } from "../Components/ButtonSection/index";
import { useNavigate } from 'react-router-dom';
import { FooterSection } from "../Components/FooterSection";
import americaIcon from '../assets/images/earth-america-o-svgrepo-com.svg';
import europaIcon from '../assets/images/globe-showing-europe-svgrepo-com.svg';
import asiaIcon from '../assets/images/earth-asia-oceania-svgrepo-com.svg';
import oceaniaIcon from '../assets/images/australian-continent-svgrepo-com.svg';
import africaIcon from '../assets/images/africa-continent-svgrepo-com.svg';
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
                    imageUrl={americaIcon}
                    altAtribute={'america-button'}
                    action={changeToAmerica}
                />
                <ButtonSection 
                    text={'Europa'} 
                    imageUrl={europaIcon}
                    altAtribute={'europe-button'}
                    action={changeToEuropa}
                />
                <ButtonSection 
                    text={'Asia'} 
                    imageUrl={asiaIcon}
                    altAtribute={'asia-button'}
                    action={changeToAsia}
                />
                <ButtonSection 
                    text={'Oceania'} 
                    imageUrl={oceaniaIcon}
                    altAtribute={'oceania-button'}
                    action={changeToOceania}
                />
                <ButtonSection 
                    text={'Africa'} 
                    imageUrl={africaIcon}
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