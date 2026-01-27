import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>FakeGuard</h4>
          <p>AI-Based Fake News Detection Platform</p>
          <p className="version-info">Prototype v1.0 | Demo Version</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/detect">Detect News</a></li>
            <li><a href="/demo">Demo</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/architecture">Architecture</a></li>
            <li><a href="/ai-techniques">AI Techniques</a></li>
            <li><a href="/devops">DevOps & Cloud</a></li>
            <li><a href="/metrics">Metrics</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:contact@fakeguard.ai">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p>&copy; {currentYear} FakeGuard. All rights reserved. | Prototype for Demonstration</p>
        <p className="disclaimer">This is a prototype application. Features marked as "Future MVP" are not yet available.</p>
      </div>
    </footer>
  );
}

export default Footer;
