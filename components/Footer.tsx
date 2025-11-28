import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'WhatsApp', href: 'https://wa.me/22951136663', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg> },
    ];

    return (
        <footer className="bg-dark-card border-t border-gray-800">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div>
                        <a href="#" className="text-2xl font-bold text-white">
                            ELITE <span className="text-brand-primary">AGENCY</span>
                        </a>
                        <p className="text-dark-subtle mt-2">Architecte du futur de la tech africaine, une startup à la fois.</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <div className="flex justify-center md:justify-end space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-dark-subtle hover:text-brand-primary transition-colors duration-300">
                                    <span className="sr-only">{link.name}</span>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-dark-subtle mt-4 text-sm">&copy; {new Date().getFullYear()} ELITE AGENCY. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;