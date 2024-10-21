import React, { useState } from 'react';
import '../styles.css'; // Ensure this file exists and contains styles for your header

interface HeaderProps {
    onShowHome: () => void;
    onShowPrograms: () => void;
    onShowContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowHome, onShowPrograms, onShowContact }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOptionClick = (option: string) => {
        if (option === 'home') {
            onShowHome();
        } else if (option === 'programs') {
            onShowPrograms(); 
        } else if (option === 'contact') {
            onShowContact();
        }
        setIsMenuOpen(false); // Close the menu after selection
    };

    return (
        <header className="header">
            <h1 className="header-title">Two Right Feet</h1>
            <button className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            {isMenuOpen && (
                <nav className="dropdown">
                    <ul>
                        <li onClick={() => handleOptionClick('home')}>Home</li>
                        <li onClick={() => handleOptionClick('programs')}>Programs</li>
                        <li onClick={() => handleOptionClick('contact')}>Contact Us</li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
