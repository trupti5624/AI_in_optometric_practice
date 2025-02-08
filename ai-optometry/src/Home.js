import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // You can add custom styles here
import { FaEye, FaHeartbeat, FaInfoCircle } from 'react-icons/fa';

const HomePage = () => {
    const navigate = useNavigate ();

    const goToTestPage = () => {
        navigate('/test');
    };

    return (
        <div className="homepage-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>AI for Optometry Care</h1>
                    <p className="tagline">Empowering Vision with AI - Your Eyes Deserve the Best</p>
                    <button className="cta-btn" onClick={goToTestPage}>
                        Take an Eye Test <FaEye />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="https://www.example.com/eye-care-image.jpg" alt="Eye Care" />
                </div>
            </header>

            <section className="about-section">
                <div className="about-content">
                    <h3>About Us <FaInfoCircle /></h3>
                    <p>
                        At Optometry Web App, we blend cutting-edge technology with expert care to provide personalized solutions for your eye health. Our AI-powered platform offers advanced eye testing, instant results, and tailored recommendations. Your vision is our top priority.
                    </p>
                </div>
            </section>

            <section className="features-section">
                <h3>Why Choose Us?</h3>
                <div className="features-cards">
                    <div className="feature-card">
                        <FaEye className="icon" />
                        <h4>AI-Powered Eye Test</h4>
                        <p>Get accurate and quick results with our AI-integrated vision tests.</p>
                    </div>
                    <div className="feature-card">
                        <FaHeartbeat className="icon" />
                        <h4>Health Insights</h4>
                        <p>Receive detailed reports and personalized recommendations based on your test results.</p>
                    </div>
                    <div className="feature-card">
                        <FaInfoCircle className="icon" />
                        <h4>Expert Care</h4>
                        <p>Our platform connects you to professional optometrists for comprehensive eye care.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
