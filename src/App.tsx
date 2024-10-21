import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProgramList from './components/ProgramList';
import About from './components/About';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'home' | 'programs' | 'about' | 'contact' | 'privacy-policy' | null>('home');

    const showHome = () => setActiveComponent('home');
    const showPrograms = () => setActiveComponent('programs');
    const showAbout = () => setActiveComponent('about');
    const showContact = () => setActiveComponent('contact');
    const showPrivacyPolicy = () => setActiveComponent('privacy-policy');

    return (
        <div className="app">
            <Header onShowHome={showHome} onShowPrograms={showPrograms} onShowAbout={showAbout} onShowContact={showContact} onShowPrivacyPolicy={showPrivacyPolicy}/>
            <div className="navigation">
                <button onClick={showHome}>Home</button>
                <button onClick={showPrograms}>Programs</button>
                <button onClick={showAbout}>About</button>
                <button onClick={showContact}>Contact</button>
                <button onClick={showPrivacyPolicy}>Privacy Policy</button>
            </div>
            {/* Conditional rendering based on activeComponent */}
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'programs' && <ProgramList />}
            {activeComponent === 'about' && <About />}
            {activeComponent === 'contact' && <ContactForm />}
            {activeComponent === 'privacy-policy' && <PrivacyPolicy />}
            <Footer onShowHome={showHome} onShowPrograms={showPrograms} onShowAbout={showAbout} onShowContact={showContact} onShowPrivacyPolicy={showPrivacyPolicy}/>
        </div>
    );
};

export default App;
