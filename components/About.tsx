import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-dark-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Notre Vision : Architectes du Prochain Niveau</h2>
                    <p className="mt-4 text-lg text-dark-subtle max-w-3xl mx-auto">Nous percevons le prochain niveau de chaque système. Notre mission est d'élever les entrepreneurs les plus impactants d'Afrique au rang de leaders technologiques mondiaux.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="bg-dark-bg p-8 rounded-xl shadow-lg">
                         <div className="flex items-center mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-full mr-4">
                               <TargetIcon className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Pour Qui : Les SMART-UPs</h3>
                        </div>
                        <p className="text-dark-subtle mb-4">
                            Une nouvelle génération d'entrepreneurs africains est en train de naître. Nous les appelons les SMART-UPs. Ils ont maîtrisé le digital, bâti des communautés et créé un impact réel. Ce sont des coachs, des consultants et des agences avec des résultats indiscutables.
                        </p>
                        <p className="text-dark-text font-semibold">
                           Une SMART-UP a plus de 70% de chances de devenir une startup valorisée à plusieurs millions d'euros en 2 ans. Avec la bonne transition technique, nous rendons cela possible.
                        </p>
                    </div>
                     <div className="bg-dark-bg p-8 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="bg-brand-primary/20 p-3 rounded-full mr-4">
                                <SparklesIcon className="w-8 h-8 text-brand-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Notre Mission : Votre Partenaire Technique</h3>
                        </div>
                        <p className="text-dark-subtle mb-4">
                           Nous ne faisons pas que développer des logiciels ; nous bâtissons des startups. Nous transformons votre cœur de métier en un produit digital unique, propulsé par l'IA.
                        </p>
                        <ul className="list-disc list-inside text-dark-text space-y-2">
                            <li>Développement et gestion de produit de A à Z.</li>
                            <li>Intégration d'IA de pointe comme Gemini & Veo.</li>
                            <li>Accompagnement stratégique pour les incubateurs.</li>
                            <li>Accès à notre réseau pour le financement pré-seed.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;