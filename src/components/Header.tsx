import React, { useState } from 'react';
import '../styles.css'; // Ensure this file exists and contains styles for your header

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <h1 className="header-title">Two Right Feet</h1>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? 'Close Menu' : 'Menu'}
            </button>
            {isMenuOpen && (
                <nav className="menu">
                    <ul>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
