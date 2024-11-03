import { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/styles.css'; 

const Header: React.FC = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div>
                <img src="/images/trf-header-footer-1.png" alt="Two Right Feet Logo" className="header-footer-1" />
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/insights">Insights</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
