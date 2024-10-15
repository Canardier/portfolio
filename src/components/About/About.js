import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <p>
                        Je m'appelle <strong>Joffrey Studer</strong>, architecte en ingénierie système et développement web. Avec une expertise dans les systèmes et réseaux, 
                        je me consacre à aider les entreprises à développer des solutions numériques robustes et évolutives. Mon parcours m'a permis de développer une passion 
                        pour la technologie, et aujourd'hui, je mets mes compétences au service de projets innovants.
                    </p>
                    <p>
                        En freelance, je propose un accompagnement complet, du développement web à l'administration des systèmes. Mon objectif est d'offrir des solutions 
                        personnalisées qui répondent aux besoins de mes clients tout en restant à la pointe de la technologie.
                    </p>
                </div>
                <div className="about-title-container">
                    <h1 className="about-title">À propos</h1>
                </div>
            </div>
        </section>
    );
};

export default About;
