import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message sent from ${name}`);
    };

    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
