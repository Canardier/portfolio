import React from 'react';
import './About.css';
/*Tailwind css */


// Fonction pour importer toutes les images dans un dossier
function importAll(r) {
    return r.keys().map(r);
}

const devops_stack = importAll(require.context('./assets/devops_stack/', false, /\.(png|jpe?g|svg)$/));
const web_stack = importAll(require.context('./assets/web_stack/', false, /\.(png|jpe?g|svg)$/));
const adsys_stack = importAll(require.context('./assets/adsys_stack/', false, /\.(png|jpe?g|svg)$/));

const About = () => {

    // If page is != Home, hover_background size go to 190px

    return (
        <section class="home-section min-h-screen">

            <div className='all_background'>
                <p className='text-5xl w-auto rounded-md py-10 text-center uppercase font-bold text-white'>About</p>
            </div>

            <div class="container md:grid md:grid-cols-6 md:gap-4 sm:flex sm:justify-items-center">
                {/* First line */}
                <div class="col-start-3 md:col-start-2 md:col-span-1 md:text-left">
                    <p className='text-2xl font-bold text-center md:text-left'>Hello, i'm Joffrey</p>
                </div>
                <div class="md:col-start-3 md:col-span-2 hidden">vide</div>
                <div class="md:col-start-5 md:col-span-2 hidden">vide</div>

                {/* Seconde line */}
                {/* Picture in desktop print but not in mobile */}
                <div class="col-start-3 md:col-start-2 md:col-start-2 md:col-span-1 hidden md:block">
                    <img class="picme" src='me.jpg' />
                </div>
                <div className="md:col-start-3 md:col-start-3 md:col-start-3 md:col-span-2 text-center md:text-left">
                    <p className='text-2xl'>Architect in systems engineering and web development. Passionate about technology and innovation, I offer my services to support companies and individuals in the creation of robust and custom digital solutions. Your idea have value, let me turn light on it.</p>
                    {/* Picture in mobile different place */}
                    <img className="picme sm:col-start-3 md:hidden" src='me.jpg' />

                    <div className='trust_col'>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:gap-1'>
                            <div className="md:col-start-1 md:col-span-1 sm:col-start-1">
                                <img alt="image qui designe une api" src="/mylogo/api.svg" className="h-10 w-auto px-9" />
                                <p className='md:text-left md:px-1 font-bold'>Api building</p>
                            </div>
                            <div className="col-start-2 col-span-2">
                                <p>Back end development and API creation adapted to your needs</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2'>
                            <div className="md:col-start-1 md:col-span-1">
                                <img alt="image d'une pile" src="/mylogo/poignee-de-main.svg" className="h-10 w-auto px-9" />
                                <p className='text-left px-9 font-bold'>Trust</p>
                            </div>
                            <div className="col-start-2 col-span-2">
                                <p>I am at your disposal</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2'>
                            <div className="md:col-start-1 md:col-span-1">
                                <img alt="image d'une pile" src="/mylogo/couches.svg" className="h-10 w-auto px-9" />
                                <p className='md:text-left md:px-4 font-bold'>Architecture</p>
                            </div>
                            <div className="col-start-2 col-span-2">
                                <p>Creation of personalized architecture for your business</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2'>
                            <div className="col-start-1 col-span-1">
                                <img alt="Image de baleine" src="/mylogo/baleine.svg" className="h-10 w-auto px-9" />
                                <p className='md:text-left md:px-1 font-bold'>Containerization</p>
                            </div>
                            <div className="col-start-2 col-span-2">
                                <p>Possibility of containerizing your applications</p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2'>
                            <div className="col-start-1 col-span-1">
                                <img alt="Quorix" src="/mylogo/picpersonnes-remplies-big.svg" className="h-10 w-auto px-9" />
                                <p className='px-5 text-left font-bold'>expertise</p>
                            </div>
                            <div className="col-start-2 col-span-2 col-start-2">
                                <p>Show me your ideas and let's develop together</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-start-5 col-span-2">
                    <div class='exp_col'>
                        <h2 className='uppercase text-2xl font-bold'>EXPERIENCE</h2>
                        <ul>
                            <li>
                                <p className='font-bold text-base'>Consultant @ CRM Newbound</p>
                                <p className='italic text-sm'>2019 - 2021</p>
                            </li>
                            <li>
                                <p className='font-bold text-base'>AppOps @ CAGIP</p>
                                <p className='italic text-sm'>2021 - 2021</p>
                            </li>
                            <li>
                                <p className='font-bold text-base'>Developpeur @ FullStack Memories France</p>
                                <p className='italic text-sm'>2021 - 2023</p>
                            </li>
                        </ul>
                    </div>

                    <div className='stack_col'>
                        <div class='tech_stack'>
                            <h3 className='text-center md:text-left font-bold text-2xl'>DevOps</h3>
                            <div class='stack_technique grid grid-cols-3 md:flex justify-left gap-3'>
                                {devops_stack.map((image, index) => (
                                    <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                ))}
                            </div>
                        </div>

                        <div class='tech_stack'>
                            <h3 className='text-center md:text-left font-bold text-2xl'>Web</h3>
                            <div class='stack_technique grid grid-cols-3 md:flex md:justify-left gap-3'>
                                {web_stack.map((image, index) => (
                                    <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                ))}
                            </div>
                        </div>

                        <div class='tech_stack'>
                            <h3 className='text-center md:text-left font-bold text-2xl'>Adsys</h3>
                            <div class='stack_technique grid grid-cols-3 md:flex md:justify-left gap-3'>
                                {adsys_stack.map((image, index) => (
                                    <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third line */}
                <div class="col-start-2 col-span-1">
                    <div class='formation_col'>
                        <h2 className='text-2xl font-bold'>FORMATION</h2>
                        <ul>
                            <li>
                                <p className='italic text-sm'>2019 - 2020</p>
                                <p className='font-bold text-base'>Développeur projet Web&Mobile</p>
                            </li>
                            <li>
                                <p className='italic text-sm'>2020 - 2021</p>
                                <p className='font-bold text-base'>Bachelor Concepteur projets SI</p>
                            </li>
                            <li>
                                <p className='italic text-sm'>2020 - 2021</p>
                                <p className='font-bold text-base'>Chef de projet IT</p>
                            </li>
                            <li>
                                <p className='italic text-sm'>2021 - 2023</p>
                                <p className='font-bold text-base'>Master architecte en ingénierie système réseau ISR</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-start-5 col-span-2 hidden">
                    vide
                </div>
            </div>
        </section>
    );
};

export default About;
