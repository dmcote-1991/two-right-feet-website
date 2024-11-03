import { useState } from 'react';
import '/src/styles.css';

const OptOut: React.FC = () => {
  const [preferences, setPreferences] = useState({
    promotions: '',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPreferences(prev => ({ ...prev, [name]: value }));
    setMessage('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'full-name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email) {
      setMessage('Please fill out your full name and email.');
      return;
    }
      // Handle storing preferences to backend here:
      /*
      const response = await fetch('/api/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, promotions }),
    });
    */
    setMessage('Your preferences have been updated!');
    // Clear preferences
    setPreferences({ promotions: '' });
    setName('');
    setEmail('');
  };

  return (
    <section className="opt-out">
      <h2>Opt-Out Preferences</h2>
      <p>
        We respect your privacy and want you to feel comfortable with the communication you 
        receive from us. If you would prefer not to receive promotional emails about our programs, 
        you can easily opt out by completing the form below.
      </p>
      <h3>Your Preferences:</h3>
      <p>
        Please let us know your choices:
      </p>
      <h4>Promotional Emails:</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="promotions"
            value="yes"
            checked={preferences.promotions === 'yes'}
            onChange={handleChange}
          />
          Yes, I would like to receive quarterly promotional emails.
        </label>
        <label>
          <input
            type="checkbox"
            name="promotions"
            value="no"
            checked={preferences.promotions === 'no'}
            onChange={handleChange}
          />
          No, I do not wish to receive promotional emails.
        </label>
        <h3>Your Information:</h3>
        <p>
          To ensure we process your preferences correctly, please provide the following 
          information:
        </p>
        <label>
          Full Name:<br />
          <input
            type="text"
            name="full-name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>Submit your preferences:</label>
        <button type="submit">Save Preferences</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </section>
  );
};

export default OptOut;