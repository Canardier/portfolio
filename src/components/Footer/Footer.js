import React from 'react';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between py-6 space-y-4 sm:flex-row sm:space-y-0">
                    {/* Copyright */}
                    <div className="text-center sm:text-left">
                        <p className="text-sm">&copy; 2024 Studer J. Tous droits réservés.</p>
                    </div>
                    {/* Social Links */}
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
