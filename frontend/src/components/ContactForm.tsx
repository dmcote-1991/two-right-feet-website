import { useState, useEffect } from 'react';
import { fetchSingleImage } from '../utils/fetchImages';
import '/src/styles.css';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contactImageFileId = { 
        id: '673c04de428be6c6877e84d3', 
        alt: 'Two Right Feet at Bristol Public Library' 
    };

    const [contactImage, setContactImage] = useState<{ src: string; alt: string }>({ src: '', alt: '' });
    const [isContactImageLoading, setIsContactImageLoading] = useState(true);

    // Fetch the contact image using fetchSingleImage utility
    useEffect(() => {
        const fetchContactImage = async () => {
            setIsContactImageLoading(true);
            try {
                const image = await fetchSingleImage(contactImageFileId.id, contactImageFileId.alt, '/images/trf-home-1.png');
                setContactImage(image);
            } catch (error) {
                console.error('Error fetching contact image:', error);
                setContactImage({ src: '/images/trf-home-1.png', alt: contactImageFileId.alt }); // Fallback image on error
            } finally {
                setIsContactImageLoading(false);
            }
        };

        fetchContactImage();
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form submitted with values:', { name, email, subject, message });
        // Add logic to process the form submission here
    }

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>
                At Two Right Feet, we are happy hear from you Monday through Saturday to answer any 
                questions you may have about us and our programs. We look forward to hearing from you!
            </p>

            <div>
                {isContactImageLoading ? (
                    <p>Loading image...</p> // Show loading message while fetching
                ) : contactImage ? (
                    <img 
                        src={contactImage.src} 
                        alt={contactImage.alt}
                        className="contact-1" 
                    />
                ) : (
                    <p>Image is unavailable.</p> // Fallback message
                )}
            </div>

            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Your Email:
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Subject:
                    <br />
                    <input type="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </label>
                <label>
                    Your Message:
                    <br />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
