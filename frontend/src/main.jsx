import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { UserProvider } from './contexts/UserContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);
