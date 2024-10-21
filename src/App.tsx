import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProgramList from './components/ProgramList';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'home' | 'programs' | 'about' | 'contact' | null>('home');

    const showHome = () => setActiveComponent('home');
    const showPrograms = () => setActiveComponent('programs');
    const showAbout = () => setActiveComponent('about');
    const showContact = () => setActiveComponent('contact');

    return (
        <div className="app">
            <Header onShowHome={showHome} onShowPrograms={showPrograms} onShowAbout={showAbout} onShowContact={showContact} />
            <div className="navigation">
                <button onClick={showHome}>Home</button>
                <button onClick={showPrograms}>Programs</button>
                <button onClick={showAbout}>About</button>
                <button onClick={showContact}>Contact</button>
            </div>
            {/* Conditional rendering based on activeComponent */}
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'programs' && <ProgramList />}
            {activeComponent === 'about' && <About />}
            {activeComponent === 'contact' && <ContactForm />}
            <Footer onShowHome={showHome} onShowPrograms={showPrograms} onShowAbout={showAbout} onShowContact={showContact} />
        </div>
    );
};

export default App;
