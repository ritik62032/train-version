import React, { useState, useRef } from 'react';
import './Chatbot.css';

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/chatgpt/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });
      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Error contacting ChatGPT.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  if (!open) return null;

  return (
    <div className="chatbot-modal">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span>ChatGPT Assistant</span>
          <button className="chatbot-close" onClick={onClose}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-message ${msg.role}`}>{msg.content}</div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="chatbot-input-row" onSubmit={sendMessage}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
            autoFocus
          />
          <button type="submit" disabled={loading || !input.trim()}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot; 