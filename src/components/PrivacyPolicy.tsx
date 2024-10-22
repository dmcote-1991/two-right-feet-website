import React from 'react';
import '../styles.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="privacy-policy">
      <h2>Introduction</h2>
      <p>
        Your privacy is important to us. We are committed to protecting your personal 
        information and ensuring its confidentiality. This Privacy Policy outlines how we 
        collect, use, and protect your information when you interact with our website and 
        services. Please review this policy periodically, as it may be updated. If you have any 
        questions, feel free to contact us.
      </p>
      <h2>Information We Collect</h2>
        <h3>Types of personal information collected</h3>
          <li>Name</li>
          <li>Email</li>
          <li>Phone Number</li>
        <h3>Methods of collection</h3>
          <li>Forms</li>
          <li>Cookies</li>
          <li>Tracking Technologies</li>
      <h2>How We Use Your Information</h2>
        <ul>
          <li>Improve Services</li>
          <li>Communicate With Users</li>
        </ul>
      <h2>How We Protect Yout Information</h2>
        <p>
          Description of security measures in place to protect user data.
        </p>
      <h2>Sharing Your Information</h2>
        <p>
          Information on whether and how you share user data with third parties.
        </p>
      <h2>Cookies and Tracking Technologies</h2>
        <p>
          Explanation of the use of cookies and similar technologies on your website.
        </p>
      <h2>Third-Party Websites</h2>
        <p>
          Information about links to other websites and your policy regarding those sites.
        </p>
      <h2>User Rights</h2>
        <p>
          Information about user rights regarding their data (eg., access, correction, deletion).
        </p>
      <h2>Children's Privacy</h2>
        <p>
          Policy regarding the collection of information from children.
        </p>
      <h2>Changes to This Privacy Policy</h2>
        <p>
          Information on how you will notify users of changes to the privacy policy.
        </p>
      <h2>Contact Information</h2>
        <p>
          How users can contact you with questions or concerns regarding the privacy policy.
        </p>
    </section>
  );
};

export default PrivacyPolicy;