import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <h1>Contact</h1>
            <p>
                N'hésitez pas à me contacter pour toute collaboration ou information. Je suis disponible pour échanger et vous accompagner dans vos projets.
            </p>
            <form className="contact-form">
                <input type="text" placeholder="Votre nom" />
                <input type="email" placeholder="Votre email" />
                <textarea placeholder="Votre message" rows="5"></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <div className="contact-details">
                <p>Ou contactez-moi directement par email à : <a href="mailto:joffrey.studer@gmail.com">joffrey.studer@gmail.com</a></p>
            </div>
        </section>
    );
};

export default Contact;
