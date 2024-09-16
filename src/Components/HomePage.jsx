import React from 'react';
import './HomePage.css';
import { FaCommentDots, FaGoogle, FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

  const handleTranslateClick = () => {
    navigate('/translator'); // Redirect to the translator page
  };
  const handleChatClick = () => {
    navigate('/chat'); // Redirect to the translator page
  };
  const handleaboutClick = () => {
    navigate('/about'); // Redirect to the translator page
  };const handlefaqClick = () => {
    navigate('/faq'); // Redirect to the translator page
  };
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Fruit.AI</h1>
        <p>Eat Healthy Stay Happy!</p>
      </div>
      
      <div className="option-grid">
        <div className="option-box" >
          <FaCommentDots className="icon" onClick={handleChatClick} />
          <p>Chat</p>
        </div>
        
        <div className="option-box" onClick={handleTranslateClick}>
          <FaGoogle className="icon" />
          <p>Translate</p>
        </div>
        
        <div className="option-box" onClick={handlefaqClick}>
          <FaQuestionCircle className="icon" />
          <p>FAQs</p>
        </div>
        
        <div className="option-box">
          <FaInfoCircle className="icon" onClick={handleaboutClick} />
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
