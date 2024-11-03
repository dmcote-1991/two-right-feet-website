import { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Your message has been successfully sent to our team. We will review your message and respond as soon as possible. Thank you!`);
    };

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>
                At Two Right Feet, we are happy hear from you Monday through Saturday to answer any 
                questions you may have about us and our programs. We look forward to hearing from you!
            </p>
            <div>
                <img src="/images/trf-contact-1.jpg" alt="Two Right Feet at Bristol Public Library" className="contact-1" />
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