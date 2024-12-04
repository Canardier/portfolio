import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="about" className="about-section">

            <div className='hover_background'>
                <p className='text-5xl w-auto font-bold rounded-md py-10 text-center uppercase text-white'>Home</p>

                <p className='slogan text-4xl w-auto rounded-md py-20 text-center uppercase text-white'>Alone we are fast, Together we go far.</p>
            </div>

                <p className='whabout text-4xl w-auto rounded-md text-center uppercase'>What about</p>

            <div className="wrap_element md:flex justify-center grid grid-cols-3 gap-3">
                <div className='Api md:px-10 px-5'>
                    <img alt="image qui designe une api" src="${process.env.PUBLIC_URL}/Trust_logo/api.svg" className="h-20 w-auto" />
                    <p className='md:text-center'>Api building</p>
                </div>
                <div className='Trust justify-center md:px-10 px-5'>
                    <img alt="image d'une poignée de main" src="${process.env.PUBLIC_URL}/Trust_logo/poignee-de-main.svg" className="h-20 w-auto" />
                    <p className='md:text-center'>Trust</p>
                </div>
                <div className='Architecture justify-center md:px-10 px-5'>
                    <img alt="image d'une pile" src="${process.env.PUBLIC_URL}/Trust_logo/couches.svg" className="h-20 w-auto md:px-1" />
                    <p className='md:text-center'>Architecture</p>
                </div>
                <div className='Containerisation md:px-10 px-5'>
                    <img alt="Image de baleine" src="${process.env.PUBLIC_URL}/Trust_logo/baleine.svg" className="h-20 w-auto md:px-3" />
                    <p className='md:text-center'>Containerisation</p>
                </div>
                <div className='Human md:px-10 px-5 col-end-4'>
                    <img alt="Quorix" src="${process.env.PUBLIC_URL}/Trust_logo/picpersonnes-remplies-big.svg" className="h-20 w-auto md:px-3" />
                    <p className='md:text-center'>Human expertise</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
