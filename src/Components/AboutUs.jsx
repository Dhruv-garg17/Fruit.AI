// src/AboutUs.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './AboutUs.css';  // For additional styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-grid">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>
                    At Fruit.AI, we're committed to helping you make smarter, healthier choices when it comes to fruits. Whether you're eager to explore new varieties, learn about their nutritional benefits, or find the perfect fruit to complement your diet, our AI-powered chatbot is here to guide you every step of the way.At Fruit.AI, we're committed to helping you make smarter, healthier choices when it comes to fruits. Whether you're eager to explore new varieties, learn about their nutritional benefits, or find the perfect fruit to complement your diet, our AI-powered chatbot is here to guide you every step of the way.
                    </p>
                    <button className="connect-button">Connect With Us</button>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="about-images">
                    <img src="/images/About1.webp" alt="Office" className="image-left" />
                </div>
            </div>

            {/* Second Section - Image on the Left */}
            <div className="about-grid">
                <div className="about-image-left">
                    <img src="/images/About2.avif" alt="Office Vision" className="image-right" />
                </div>
                <div className="about-text">
                    <h2>Our Vision</h2>
                    <p>
                    At Fruit.AI, our vision is to revolutionize the way people connect with fruits and their health. We aim to make healthy eating effortless by offering personalized fruit recommendations that align with each individual's nutritional goals and lifestyle. By leveraging the power of AI, we envision a world where making smart, nutritious choices is simple, accessible, and enjoyable for everyone.We are dedicated to helping you seamlessly integrate the most beneficial fruits into your everyday life, guiding you towards a healthier, more balanced future—one fruit at a time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
