import React from 'react';
import './Header.css';

const Header = ({ currentSection, changeSection }) => {
    const sections = ["Accueil", "Projets", "À propos", "Contact"];

    return (
        <div className="header">
            <ul>
                {sections.map((section, index) => (
                    <li
                        key={section}
                        className={currentSection === section ? 'active' : ''}
                        onClick={() => changeSection(index)} // Changement de section au clic
                    >
                        {section}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
