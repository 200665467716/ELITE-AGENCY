import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'Notre Vision' },
        { href: '#team', label: 'Le Duo' },
        { href: '#projects', label: 'Nos Réalisations' },
    ];

    return (
        <header className="bg-dark-bg/80 backdrop-blur-lg sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-white">
                        ELITE <span className="text-brand-primary">AGENCY</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-dark-subtle hover:text-white transition-colors duration-300">{link.label}</a>
                        ))}
                         <a href="https://wa.me/22951136663" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4">
                             {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="text-dark-subtle hover:text-white transition-colors duration-300 block py-2" onClick={() => setIsOpen(false)}>{link.label}</a>
                            ))}
                             <a href="https://wa.me/22951136663" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-brand-primary/90 transition-all duration-300 text-center">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;