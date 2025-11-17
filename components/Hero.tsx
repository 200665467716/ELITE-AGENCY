import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Hero: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-dark-bg">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        De l'Entreprise d'Impact à la <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-amber-200">
                            Startup Propulsée par l'IA
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-dark-subtle mb-10">
                        Nous sommes ELITE AGENCY, vos co-fondateurs techniques. Nous transformons votre cœur de métier en une société technologique évolutive, prête pour les incubateurs et le financement d'amorçage.
                    </p>
                    <a
                        href="https://wa.me/22951136663"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30"
                    >
                        <WhatsAppIcon className="w-6 h-6 mr-3" />
                        Commencez Votre Transition
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;