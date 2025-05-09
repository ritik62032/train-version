import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Chats', icon: '💬' },
    { name: 'Explore', icon: '🌍' },
    { name: 'Saved', icon: '🔖' },
    { name: 'Updates', icon: '📢' },
    { name: 'Inspiration', icon: '✨' },
    { name: 'Create', icon: '✏️' }
  ];

  const getStartedCards = [
    {
      title: 'Plan Your Trip',
      description: 'Create a personalized travel itinerary with our AI-powered planning tool',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Find Best Deals',
      description: 'Discover exclusive deals on flights, hotels, and activities',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Local Experiences',
      description: 'Book authentic local experiences and guided tours',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const inspirationCards = [
    {
      title: 'Hidden Gems',
      description: 'Explore off-the-beaten-path destinations and secret spots',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Food Adventures',
      description: 'Discover local cuisines and food experiences around the world',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Cultural Immersion',
      description: 'Experience local traditions, festivals, and cultural events',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">TravelAI</div>
        <nav>
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <span>{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <button className="dashboard-newchat" onClick={() => navigate('/chat')}>
          New Chat
        </button>
        <div className="dashboard-user">
          <span>👤</span>
          Welcome, User
        </div>
      </aside>

      <main className="dashboard-main">
        <h1 className="dashboard-title">Welcome to Your Travel Dashboard</h1>
        <p className="dashboard-welcome">
          Your personal travel companion for planning, discovering, and experiencing amazing journeys.
          Let's make your next adventure unforgettable!
        </p>

        <section className="dashboard-section">
          <h2>Get Started</h2>
          <div className="dashboard-cards">
            {getStartedCards.map((card, index) => (
              <div key={index} className="dashboard-card" onClick={() => navigate('/itinerary')}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Get Inspired</h2>
          <div className="dashboard-cards">
            {inspirationCards.map((card, index) => (
              <div key={index} className="dashboard-card" onClick={() => navigate('/explore')}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard; 