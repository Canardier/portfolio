import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';


const Section = ({ title, children }) => {
    return (
        <motion.section
            className="section"
            initial={{ opacity: 0 }} // Section commence invisible
            animate={{ opacity: 1 }} // Section devient visible
            exit={{ opacity: 0 }}    // Section disparaît en douceur
            transition={{ duration: 0.8 }} // Durée de la transition
        >
            <h2>{title}</h2>
            <div>{children}</div>
        </motion.section>
    );
};



export default Section;
