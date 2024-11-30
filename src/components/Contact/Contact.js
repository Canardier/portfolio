import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
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
                <form action="#" method="POST" className="sm:flex-col md:col-start-6 md:col-span-2 grid md:grid-cols-8 md:gap-2 grid-cols-1">
                    {/* First line */}
                    <div className='md:col-start-1 md:col-span-4 col-span-2'>
                        <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">
                            Full name *
                        </label>
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                    <div className='md:col-start-5 md:col-span-4'>
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                            Company
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                    <div className='col-start-1 md:col-span-8 col-span-1'>
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email *
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                    <div className='col-start-1 md:col-span-8'>
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            defaultValue={''}
                        />
                    </div>
                    <div className="md:col-start-3 md:col-span-4 col-start-1 md:mt-10 my-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
