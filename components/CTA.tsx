import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const CTA: React.FC = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-amber-500 to-brand-primary rounded-xl p-10 md:p-16 text-center shadow-2xl shadow-brand-primary/20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Prêt à Bâtir Votre Startup Tech ?
                    </h2>
                    <p className="text-lg text-neutral-800 max-w-2xl mx-auto mb-8">
                        Discutons-en. Explorons votre vision et définissons la trajectoire pour transformer votre entreprise en une société tech évolutive et finançable. L'avenir vous attend.
                    </p>
                    <a
                        href="https://wa.me/22951136663"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                        <WhatsAppIcon className="w-6 h-6 mr-3 text-green-500" />
                        Discuter avec Emmerson
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;