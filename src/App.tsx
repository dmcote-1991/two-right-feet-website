import React, { useState } from 'react';
import Header from './components/Header';
import ProgramList from './components/ProgramList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'programs' | 'contact' | null>(null);

    const showPrograms = () => setActiveComponent('programs');
    const showContact = () => setActiveComponent('contact');

    return (
        <div className="app">
            <Header onShowPrograms={showPrograms} onShowContact={showContact} />
            <div className="navigation">
                <button onClick={showPrograms}>Programs</button>
                <button onClick={showContact}>Contact Us</button>
            </div>
            {/* Conditional rendering based on activeComponent */}
            {activeComponent === 'programs' && <ProgramList />}
            {activeComponent === 'contact' && <ContactForm />}
            <Footer onShowPrograms={showPrograms} onShowContact={showContact} />
        </div>
    );
};

export default App;
