import React from 'react';
import './UserDashboard.css';

const sidebarItems = [
  { label: 'Chats' },
  { label: 'Explore' },
  { label: 'Saved' },
  { label: 'Updates' },
  { label: 'Inspiration' },
  { label: 'Create' },
];

const getStarted = [
  { title: 'Take our travel quiz' },
  { title: 'Create a trip' },
  { title: 'Creator tools' },
];

const getInspired = [
  { title: 'Top 10 Hotels', img: 'https://via.placeholder.com/120x80' },
  { title: '10 Unforgettable Destinations', img: 'https://via.placeholder.com/120x80' },
  { title: 'Explore Local Food', img: 'https://via.placeholder.com/120x80' },
];

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">mindtrip.</div>
        <nav>
          <ul>
            {sidebarItems.map(item => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </nav>
        <button className="dashboard-newchat">New chat</button>
        <div className="dashboard-user">Traveler</div>
      </aside>
      <main className="dashboard-main">
        <h1 className="dashboard-title">Where to today?</h1>
        <p className="dashboard-welcome">Hey there, where would you like to go? I'm here to assist you in planning your experience. Ask me anything travel related.</p>
        <section className="dashboard-section">
          <h2>Get started</h2>
          <div className="dashboard-cards">
            {getStarted.map(card => (
              <div className="dashboard-card" key={card.title}>{card.title}</div>
            ))}
          </div>
        </section>
        <section className="dashboard-section">
          <h2>Get inspired</h2>
          <div className="dashboard-cards">
            {getInspired.map(card => (
              <div className="dashboard-card" key={card.title}>
                <img src={card.img} alt={card.title} />
                <div>{card.title}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard; 