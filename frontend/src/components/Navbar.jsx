import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={handleLogoClick}>
          <h1>YatraMate</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/recommendations">Recommendations</Link></li>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <div className="button-group">
          <button className="get-started-btn" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="login-btn" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
