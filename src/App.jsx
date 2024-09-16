import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import Translator from './Components/Translator';
import AboutUs from './Components/AboutUs';
import FAQPage from './Components/FAQPage';
import ChatPage from './Components/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
    
  );
}



export default App;
