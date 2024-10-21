import React from 'react';
import '../styles.css';

interface FooterProps {
  onShowHome: () => void;
  onShowPrograms: () => void;
  onShowAbout: () => void;
  onShowContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowHome, onShowPrograms, onShowAbout, onShowContact}) => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Two Right Feet. All rights reserved.</p>
      <nav>
        <ul>
          <li onClick={onShowHome}>Home</li>
          <li onClick={onShowPrograms}>Programs</li>
          <li onClick={onShowAbout}>About</li>
          <li onClick={onShowContact}>Contact</li>
        </ul>
      </nav>
    </footer>
  )
};

export default Footer;
