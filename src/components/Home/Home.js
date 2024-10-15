import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-content">
                <h1>Bienvenue sur mon portfolio</h1>
                <p>
                    Je suis <strong>Joffrey Studer</strong>, architecte en ingénierie système et développement web. Passionné par la technologie et l'innovation, j'accompagne les entreprises dans la création de solutions numériques robustes et sur mesure.
                </p>
            </div>
            <div className="home-photo-container">
                <img src="me.jpg" alt="Joffrey Studer" className="home-photo" />
                <div className="social-links">
                    <a href="https://github.com/Canardier" target="_blank" rel="noopener noreferrer">
                        <img src="/portfolio/github.png" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/studer-joffrey-274466186/" target="_blank" rel="noopener noreferrer">
                        <img src="/portfolio/linkedin.png" alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
