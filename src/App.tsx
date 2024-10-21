import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProgramList from './components/ProgramList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'home' | 'programs' | 'contact' | null>('home');

    const showHome = () => setActiveComponent('home');
    const showPrograms = () => setActiveComponent('programs');
    const showContact = () => setActiveComponent('contact');

    return (
        <div className="app">
            <Header onShowHome={showHome} onShowPrograms={showPrograms} onShowContact={showContact} />
            <div className="navigation">
                <button onClick={showHome}>Home</button>
                <button onClick={showPrograms}>Programs</button>
                <button onClick={showContact}>Contact Us</button>
            </div>
            {/* Conditional rendering based on activeComponent */}
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'programs' && <ProgramList />}
            {activeComponent === 'contact' && <ContactForm />}
            <Footer onShowHome={showHome} onShowPrograms={showPrograms} onShowContact={showContact} />
        </div>
    );
};

export default App;
