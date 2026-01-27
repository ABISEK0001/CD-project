import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">FakeGuard</span>
        </Link>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/detect" className="nav-link">Detect News</Link>
          <Link to="/architecture" className="nav-link">Architecture</Link>
          <Link to="/ai-techniques" className="nav-link">AI Techniques</Link>
          <Link to="/devops" className="nav-link">DevOps</Link>
          <Link to="/metrics" className="nav-link">Metrics</Link>
          <Link to="/demo" className="nav-link">Demo</Link>
          <Link to="/dashboard" className="nav-link nav-link-dashboard">Dashboard</Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
