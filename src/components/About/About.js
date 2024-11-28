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
    return (
        <section class="home-section">
            <h1 class="title text-3xl font-bold">À propos</h1>

            <div class="grid grid-cols-4 base">
                <div>
                    <p>01</p>
                </div>
                <div>
                    <p>01</p>
                </div>
                <div>
                    <p>01</p>
                </div>
            </div>

            <div>
                <div>
                    <div span={6} offset={2} xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <div class='formation'>
                                <h2>FORMATION</h2>
                                <ul>
                                    <li>
                                        <p>2019 - 2020</p>
                                        <p>Développeur projet Web&Mobile</p>
                                    </li>
                                    <li>
                                        <p>2020 - 2021</p>
                                        <p>Bachelor Concepteur projets SI</p>
                                    </li>
                                    <li>
                                        <p>2020 - 2021</p>
                                        <p>Chef de projet IT</p>
                                    </li>
                                    <li>
                                        <p>2021 - 2023</p>
                                        <p>Master architecte en ingénierie système réseau ISR</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div class='stack_bloc'>
                                <div class='tech_stack'>
                                    <h3>DevOps</h3>
                                    <div class='stack_technique'>
                                        {devops_stack.map((image, index) => (
                                            <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                        ))}
                                    </div>
                                </div>
                                <div class='tech_stack'>
                                    <h3>Web</h3>
                                    <div class='stack_technique'>
                                        {web_stack.map((image, index) => (
                                            <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                        ))}
                                    </div>
                                </div>
                                <div class='tech_stack'>
                                    <h3>Adsys</h3>
                                    <div class='stack_technique'>
                                        {adsys_stack.map((image, index) => (
                                            <img key={index} class="stack-icons" src={image.default || image} alt={`icon-${index}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div span={8} xs={{ span: 24, order: 1 }} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <h2><span>Salut, moi c'est joffrey</span></h2>
                        </div>
                        <div>
                            <div span={3}>
                                <div><img class="icon" src='/portfolio/gmail.png' /></div>
                                <div><img class="icon" src='/portfolio/github.png' /></div>
                                <div><img class="icon" src='/portfolio/linkedin.png' /></div>
                            </div>
                            <div span={17}>
                                <img class="picme" src='me.jpg' />
                            </div>
                            <div align="bottom">
                                <div span={8} >
                                    <img class="icon-dl" src='/portfolio/telecharger_white.png' />
                                </div>
                            </div>

                        </div>
                        <div>
                            <p>Je suis Joffrey Studer,
                                architecte en ingénierie système et développement web. Passionné par la technologie et l'innovation, j'accompagne les entreprises dans la création de solutions numériques robustes et sur mesure.</p>
                        </div>
                    </div>

                    <div span={8} xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div class='experience'>
                            <h2>EXPERIENCE</h2>
                            <ul>
                                <li>
                                    <p>2019 - 2021</p>
                                    <p>Consultant @ CRM Newbound</p>
                                </li>
                                <li>
                                    <p>2021 - 2021</p>
                                    <p>AppOps @ CAGIP</p>
                                </li>
                                <li>
                                    <p>2021 - 2023</p>
                                    <p>Developpeur @ FullStack Memories France</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
