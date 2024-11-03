import { lazy, useState } from 'react';
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./components/Home'));
const Programs = lazy(() => import('./components/Programs'));
const ProgramList = lazy(() => import('./components/ProgramList'));
const About = lazy(() => import('./components/About'));
const Insights = lazy(() => import('./components/Insights'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const Footer = lazy(() => import('./components/Footer'));
const OptOut = lazy(() => import('./components/OptOut'));
import '/src/styles.css';

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
