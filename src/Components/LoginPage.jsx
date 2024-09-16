import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaFingerprint, FaPinterest, FaEnvelope, FaLock, FaUser, FaEye } from 'react-icons/fa';
import './LoginPage.css';  

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the home page after login/signup
    navigate('/home');
  };
  

  return (
    
    <div className="auth-container">
      
      <div className="form-box">
        <div className="form-header">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            Log In
          </button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group" style={{ position: 'relative' }}>
              <FaUser
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
              }}
            />
              <input type="text" className="form-control" placeholder="User Name" required  style={{ paddingLeft: '40px' }}/>
            </div>
          )}
          <div className="form-group" style={{ position: 'relative' }}>
          <FaEnvelope
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
              }}
            />
          
            <input
              type="email"
              className="form-control"
              
              placeholder=" Email"
              required
              style={{ paddingLeft: '40px' }}
            />
            
          </div>
          <div className="form-group" style={{ position: 'relative' }}>
          <FaLock
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              style={{ paddingLeft: '40px' }}
            />
            <FaEye
              style={{
                position: 'absolute',
                left: '220px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
              }}
            />
          </div>
          {isLogin && <a href="#" className="forgot-password">Forgot Password?</a>}

          <button type="submit" className="btn btn-danger btn-block">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p>or connect with</p>

        <div className="social-login">
          <button className="btn btn-outline-primary mx-1">
            <FaLinkedin />
          </button>
          <button className="btn btn-outline-primary mx-1">
            <FaFacebookF />
          </button>
          <button className="btn btn-outline-danger mx-1">
            <FaInstagram />
          </button>
          <button className="btn btn-outline-info mx-1">
            <FaPinterest />
          </button>
        </div>

        <div className="fingerprint-icon">
          <FaFingerprint size={40} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
