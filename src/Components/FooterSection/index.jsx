import React from "react";
import './styles.css';

function FooterSection () {
    return (
        <footer className="footer-container">
            <img src="https://www.usbbog.edu.co/wp-content/uploads/2021/06/logoUSBBOG.png" alt="logo-universidad-de-san-buenventura" className="footer-image"/>
            <section className="names-container">
                <p className="footer-text first-name">Santiago Rodriguez</p>
                <p className="footer-text second-name">Edwin Agudelo</p>
                <p className="footer-text third-name">Cristian Albornoz</p>
            </section>
        </footer>
    );
};

export { FooterSection };