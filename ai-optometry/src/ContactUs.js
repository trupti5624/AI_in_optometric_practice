import React, { useState } from 'react';
import './App.css'; // Add a CSS file for custom styles

const ContactUs = () => {
    const [query, setQuery] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send the query to a backend or API here
        setSubmitted(true);
    };

    return (
        <div className="contact-us-container">
            <h2>Contact Us</h2>
            
            <section className="helpline-section">
                <h3>Ophthalmologist Helpline</h3>
                <p>If you need urgent eye care assistance, please contact us:</p>
                <p className="helpline-number">Helpline Number: +1 (800) 555-OPTIC</p>
                <p>Email: support@optometrywebapp.com</p>
            </section>
            
            <section className="query-section">
                <h3>Ask a Query</h3>
                <p>If you have any questions regarding your eye care or our services, feel free to ask below:</p>
                <form onSubmit={handleSubmit} className="query-form">
                    <textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type your query here..."
                        required
                    />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                {submitted && <p className="success-message">Thank you for your query. We will get back to you soon!</p>}
            </section>

            <section className="faq-section">
                <h3>Frequently Asked Questions (FAQs)</h3>
                <div className="faq-item">
                    <h4>Q: How can I book an eye test?</h4>
                    <p>A: You can easily book an eye test through our web app by navigating to the "Take an Eye Test" section and filling out the form.</p>
                </div>
                <div className="faq-item">
                    <h4>Q: How long does it take to get the results?</h4>
                    <p>A: Your test results will be generated instantly using our AI-powered system, and they will be provided to you immediately after completing the test.</p>
                </div>
                <div className="faq-item">
                    <h4>Q: Do I need any special equipment for the eye test?</h4>
                    <p>A: No, our platform is designed to perform eye tests using your device's camera. Make sure you have a well-lit environment for accurate results.</p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
