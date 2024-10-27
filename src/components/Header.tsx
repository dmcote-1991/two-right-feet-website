import React, { useState } from 'react';
import '../styles.css'; // Ensure this file exists and contains styles for your header

interface HeaderProps {
    onShowHome: () => void;
    onShowPrograms: () => void;
    onShowAbout: () => void;
    onShowInsights: () => void;
    onShowContact: () => void;
    onShowPrivacyPolicy: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    onShowHome, 
    onShowPrograms, 
    onShowAbout, 
    onShowInsights, 
    onShowContact, 
    onShowPrivacyPolicy 
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOptionClick = (option: string) => {
        if (option === 'home') {
            onShowHome();
        } else if (option === 'programs') {
            onShowPrograms(); 
        } else if (option === 'about') {
            onShowAbout(); 
        } else if (option === 'insights') {
            onShowInsights();
        } else if (option === 'contact') {
            onShowContact();
        } else if (option === 'privacy-policy') {
            onShowPrivacyPolicy();
        }
        setIsMenuOpen(false); // Close the menu after selection
    };

    return (
        <header className="header">
            <div>
            <img src={`${process.env.PUBLIC_URL}/images/trf-header-footer-1.png`} alt="Two Right Feet Logo" className="header-footer-1" />
            </div>
            <h1 className="header-title">Two Right Feet</h1>
            <div className="contact-info">
                <span>(914) 417-7182</span> | <span><a href="mailto:hannah@tworightfeetmusic.com">hannah@tworightfeetmusic.com</a></span>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            {isMenuOpen && (
                <nav className="hamburger-dropdown">
                    <ul>
                        <li onClick={() => handleOptionClick('home')}>Home</li>
                        <li onClick={() => handleOptionClick('programs')}>Programs</li>
                        <li onClick={() => handleOptionClick('about')}>About</li>
                        <li onClick={() => handleOptionClick('insights')}>Insights</li>
                        <li onClick={() => handleOptionClick('contact')}>Contact</li>
                        <li onClick={() => handleOptionClick('privacy-policy')}>Privacy Policy</li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
