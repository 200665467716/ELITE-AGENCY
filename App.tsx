import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;