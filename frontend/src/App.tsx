import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';

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
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/about">About</Link>
                    <Link to="/insights">Insights</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/program-list" element={<ProgramList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/opt-out" element={<OptOut />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
