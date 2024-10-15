import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Projet CRM",
            description: "Un système de gestion de la relation client (CRM) complet, conçu pour améliorer la gestion des clients et automatiser les processus commerciaux.",
            link: "#",
        },
        {
            title: "Site de e-commerce",
            description: "Développement d'une plateforme de vente en ligne avec un système de paiement sécurisé et une gestion des stocks en temps réel.",
            link: "#",
        },
        {
            title: "Application de gestion de tâches",
            description: "Une application mobile permettant de créer, organiser et suivre des tâches avec des notifications et des priorités.",
            link: "#",
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="projects-title-container">
                    <h1 className="projects-title">Mes Projets</h1>
                </div>
                <div className="projects-cards-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link">Voir le projet</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
