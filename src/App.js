import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';  // Ajout du Header
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState(0);
    const [canScroll, setCanScroll] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false); // Contrôle l'affichage de l'overlay

    const sections = [
        { title: "Accueil", component: <Home />, color: "#4cd137" },
        { title: "Projets", component: <Projects />, color: "#ff4757" },
        { title: "À propos", component: <About />, color: "#1e90ff" },
        { title: "Contact", component: <Contact />, color: "#ffa502" }
    ];

    // Gestion du changement de section au clic
    const changeSection = (index) => {
        setShowOverlay(true);
        setTimeout(() => {
            setActiveSection(index);
            setTimeout(() => setShowOverlay(false), 400); // Fondu après la transition
        }, 400);
    };

    const handleScroll = useCallback(
        (event) => {
            if (!canScroll) return;

            const deltaY = event.deltaY;

            if (deltaY > 0 && activeSection < sections.length - 1) {
                setShowOverlay(true);
                setTimeout(() => {
                    setActiveSection((prevSection) => prevSection + 1);
                    setTimeout(() => setShowOverlay(false), 400);
                }, 400);
            } else if (deltaY < 0 && activeSection > 0) {
                setShowOverlay(true);
                setTimeout(() => {
                    setActiveSection((prevSection) => prevSection - 1);
                    setTimeout(() => setShowOverlay(false), 400);
                }, 400);
            }

            setCanScroll(false);
            setTimeout(() => {
                setCanScroll(true);
            }, 800);
        },
        [canScroll, activeSection, sections.length]
    );

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [handleScroll]);

    return (
        <div className="App">
            <Header currentSection={sections[activeSection].title} changeSection={changeSection} />

            {/* Superposition colorée */}
            {showOverlay && (
                <motion.div
                    className="color-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 100 }} // Commence en bas
                    animate={{ opacity: 1, y: 0 }} // Arrive au centre
                    exit={{ opacity: 0, y: -100 }} // Sort en haut
                    transition={{ duration: 0.8 }}
                >
                    {sections[activeSection].component}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;
