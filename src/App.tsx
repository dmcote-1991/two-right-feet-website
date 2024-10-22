import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Programs from './components/Programs';
import ProgramList from './components/ProgramList';
import About from './components/About';
import Insights from './components/Insights';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import OptOut from './components/OptOut';
import './styles.css';

const App: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'home' | 'programs' | 'program-list' | 'about' | 'insights' | 'contact' | 'privacy-policy' | 'opt-out' | null>('home');

    const showHome = () => setActiveComponent('home');
    const showPrograms = () => setActiveComponent('programs');
    const showProgramList = () => setActiveComponent('program-list');
    const showAbout = () => setActiveComponent('about');
    const showInsights = () => setActiveComponent('insights');
    const showContact = () => setActiveComponent('contact');
    const showPrivacyPolicy = () => setActiveComponent('privacy-policy');
    const showOptOut = () => setActiveComponent('opt-out');

    return (
        <div className="app">
            <Header 
                onShowHome={showHome} 
                onShowPrograms={showPrograms} 
                onShowAbout={showAbout} 
                onShowInsights={showInsights} 
                onShowContact={showContact} 
                onShowPrivacyPolicy={showPrivacyPolicy}/>
            <div className="navigation">
                <button onClick={showHome}>Home</button>
                <button onClick={showPrograms}>Programs</button>
                <button onClick={showAbout}>About</button>
                <button onClick={showInsights}>Insights</button>
                <button onClick={showContact}>Contact</button>
                <button onClick={showPrivacyPolicy}>Privacy Policy</button>
            </div>
            {/* Conditional rendering based on activeComponent */}
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'programs' && <Programs onShowProgramList={showProgramList} />}
            {activeComponent === 'program-list' && <ProgramList />}
            {activeComponent === 'about' && <About />}
            {activeComponent === 'insights' && <Insights />}
            {activeComponent === 'contact' && <ContactForm />}
            {activeComponent === 'privacy-policy' && <PrivacyPolicy />}
            {activeComponent === 'opt-out' && <OptOut />}
            <Footer 
                onShowHome={showHome} 
                onShowPrograms={showPrograms} 
                onShowAbout={showAbout} 
                onShowInsights={showInsights} 
                onShowContact={showContact} 
                onShowPrivacyPolicy={showPrivacyPolicy} 
                onShowOptOut={showOptOut} />
        </div>
    );
};

export default App;
