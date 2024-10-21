import React from 'react';
import '../styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Two Right Feet. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
