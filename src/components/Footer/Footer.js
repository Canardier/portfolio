import React from 'react';

function About() {
    return (
            <footer className="bg-gray-800 text-gray-300 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">&copy; 2024 Studer J. Tous droits réservés.</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Canardier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/studerj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.malt.fr/profile/studerj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                Malt
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default About;
