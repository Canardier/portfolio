import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_4qye4qy', // Remplacez par votre Service ID EmailJS
                'template_cztlu5o', // Remplacez par votre Template ID EmailJS
                form.current,
                'PFT7BmW6JL3LSSobV' // Remplacez par votre Clé Publique EmailJS
            )
            .then(
                (result) => {
                    console.log('Email envoyé :', result.text);
                    alert('Message envoyé avec succès !');
                },
                (error) => {
                    console.error('Erreur lors de l\'envoi :', error.text);
                    alert('Une erreur est survenue. Veuillez réessayer.');
                }
            );
    };

    return (
        <section className="contact-section min-h-screen">
            <div className='all_background'>
                <p className='text-5xl w-auto rounded-md py-10 text-center font-bold uppercase text-white'>Contact</p>
            </div>

            <div className='text-center uppercase'>
                <p className='text-2xl md:text-3xl'>My infos</p>
                <p className='text-2xl md:text-4xl font-bold'>Where you can find me</p>
            </div>

            <div className='middle-barre hidden md:block'></div>

            <div className='sm:flex-col md:grid md:grid-cols-8  contact-infos'>
                <div className='md:col-start-2 sm:flex-col md:col-span-2 mt-10'>
                    <div className='text-2xl col-start-1 col-span-2 text-center'>
                        <p><b>Joffrey.studer@gmail.com</b></p>
                    </div>
                    <div className='text-2xl col-start-1 col-span-2 text-center'>
                        <p><b>06 95 77 04 22</b></p>
                    </div>
                    <div className='md:col-start-1 md:col-span-2 md:flex gap-4 mt-10 col-start-2'>
                        <a target="_blank" href='https://www.malt.fr/profile/studerj'>
                            <img alt="Logo de malt" src="/contact-logo/Malt_logo_pink.svg" className="contact-logo logo-malt" />
                        </a>
                        <a target="_blank" href='https://github.com/Canardier'><img alt="Logo de github" src="/contact-logo/GitHub_Logo.png" className="contact-logo logo-github" /></a>
                        <a target="_blank" href='https://www.linkedin.com/in/studerj'><img alt="Logo de linkedin" src="/contact-logo/LinkedIn_2021.png" className="contact-logo logo-linkedin" /></a>
                    </div>
                </div>
                <div className='sm-barre md:hidden block'></div>
                <form action="#" ref={form} method="POST" onSubmit={sendEmail} className="sm:flex-col md:col-start-6 md:col-span-2 grid md:grid-cols-8 md:gap-2 grid-cols-1">
                    {/* First line */}
                    <div className='md:col-start-1 md:col-span-4 col-span-2'>
                        <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900 md:ml-0 ml-10">
                            Full name *
                        </label>
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            className="block md:w-full md:ml-0 w-3/4 ml-10 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            required
                        />
                    </div>
                    <div className='md:col-start-5 md:col-span-4'>
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 md:ml-0 ml-10">
                            Company
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="given-name"
                            className="block md:w-full md:ml-0 w-3/4 ml-10 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                    <div className='col-start-1 md:col-span-8 col-span-1'>
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 md:ml-0 ml-10">
                            Email *
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="given-name"
                            className="block md:w-full md:ml-0 w-3/4 ml-10 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            required
                        />
                    </div>
                    <div className='col-start-1 md:col-span-8'>
                        <label htmlFor="message" name="user_email" className="block text-sm/6 font-semibold text-gray-900 md:ml-0 ml-10">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block md:w-full md:ml-0 w-3/4 ml-10 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            defaultValue={''}
                            required
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-4 col-start-1 md:mt-10 my-10">
                        <button
                            type="submit"
                            className="block md:w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
