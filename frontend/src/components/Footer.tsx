import { Link } from 'react-router-dom';
import '/src/styles.css';

const Footer: React.FC = () => { 
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
          <div>
            <img src="/images/trf-header-footer-1.png" alt="Two Right Feet Logo" className="header-footer-1" />
          </div>
          <p>
            Looking for more information about us? You can see one of our programs on the 
            <a href="https://www.youtube.com/channel/UCsdS-iv2Cv0pxzV8vrarz2Q?view_as=subscriber" target="_blank" rel="noopener noreferrer"> Two Right Feet YouTube Channel</a>.
            If you would like a trial session to see what our program would look like in your classroom, library, or center, please do not hesitate to contact us.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/insights">Insights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/opt-out">Opt-Out Preferences</Link></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Two Right Feet. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
