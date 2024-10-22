import React from 'react';
import '../styles.css';

interface FooterProps {
  onShowHome: () => void;
  onShowPrograms: () => void;
  onShowAbout: () => void;
  onShowInsights: () => void;
  onShowContact: () => void;
  onShowPrivacyPolicy: () => void;
  onShowOptOut: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onShowHome, 
  onShowPrograms, 
  onShowAbout, 
  onShowInsights, 
  onShowContact, 
  onShowPrivacyPolicy,
  onShowOptOut
}) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
            <p>Two Right Feet Music</p>
            <p>428 Heritage Village</p>
            <p>Southbury, CT 06488</p>
            <p>Email: <a href="mailto:hannah@tworightfeetmusic.com">hannah@tworightfeetmusic.com</a></p>
            <p>Phone: (914) 417-7182</p>
        </div>
        <div>
          <h3>Hours</h3>
            <p>Monday: 8am – 7pm</p>
            <p>Tuesday: 8am – 7pm</p>
            <p>Wednesday: 8am – 7pm</p>
            <p>Thursday: 8am – 7pm</p>
            <p>Friday: 8am – 7pm</p>
            <p>Saturday: 10am – 3pm</p>
            <p>Sunday: Closed</p>
        </div>
        <div>
          <h3>More About Us</h3>
          <p>
            Looking for more information about us? You can see one of our programs on the 
            <a href="https://www.youtube.com/channel/UCsdS-iv2Cv0pxzV8vrarz2Q?view_as=subscriber" target="_blank" rel="noopener noreferrer"> Two Right Feet YouTube Channel</a>.
            If you would like a trial session to see what our program would look like in your classroom, library, or center, please do not hesitate to contact us.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li onClick={onShowHome}>Home</li>
          <li onClick={onShowPrograms}>Programs</li>
          <li onClick={onShowAbout}>About</li>
          <li onClick={onShowInsights}>Insights</li>
          <li onClick={onShowContact}>Contact</li>
          <li onClick={onShowPrivacyPolicy}>Privacy Policy</li>
          <li onClick={onShowOptOut}>Opt-Out Preferences</li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Two Right Feet. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
