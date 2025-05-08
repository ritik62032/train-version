import React, { useState } from 'react';
import { apiService } from '../services/apiService';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await apiService.login(email, password);
      onLogin(data);
    } catch (err) {
      setError(err.detail || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="remember-me">
              <input 
                type="checkbox" 
                id="rememberMe"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          
          {error && <p className="error">{error}</p>}
          
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
          
          <div className="social-login">
            <div className="social-login-title">Or continue with</div>
            <div className="social-buttons">
              <button type="button" className="social-button" onClick={() => alert('Google login not implemented yet')}>
                G
              </button>
              <button type="button" className="social-button" onClick={() => alert('Facebook login not implemented yet')}>
                f
              </button>
              <button type="button" className="social-button" onClick={() => alert('Apple login not implemented yet')}>
                ⌘
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
