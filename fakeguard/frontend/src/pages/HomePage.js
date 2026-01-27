import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>FakeGuard</h1>
          <h2 className="subtitle">AI-Based Fake News Detection Platform</h2>
          <p className="tagline">Detect fake news in seconds using advanced AI and machine learning</p>
          <div className="hero-buttons">
            <Link to="/detect" className="btn btn-primary">Check News Authenticity</Link>
            <Link to="/architecture" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-icon">🔍</span>
            <p>Real-time Analysis</p>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">🤖</span>
            <p>AI Powered</p>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">⚡</span>
            <p>Instant Results</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container section">
        <h2>The Problem</h2>
        <div className="problem-content">
          <div className="problem-text">
            <p>
              Misinformation and fake news have become a critical challenge in today's digital age. 
              With social media algorithms amplifying sensational content and the ease of creating 
              convincing false narratives, billions of people are exposed to unreliable information daily.
            </p>
            <div className="problem-stats">
              <div className="stat">
                <div className="stat-number">4.6B</div>
                <div className="stat-label">Active Social Media Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">94%</div>
                <div className="stat-label">Share News Without Reading</div>
              </div>
              <div className="stat">
                <div className="stat-number">68%</div>
                <div className="stat-label">Fall for Misinformation</div>
              </div>
            </div>
          </div>
          <div className="problem-visual">
            <div className="problem-icon">⚠️</div>
            <p className="problem-highlight">Without tools to verify authenticity, fake news spreads 6x faster than truth</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container section solution-section">
        <h2>Our Solution: FakeGuard</h2>
        <div className="solution-text">
          <p>
            FakeGuard leverages advanced Natural Language Processing (NLP), machine learning classifiers, 
            and sentiment analysis to detect fake news instantly. Simply paste your news content or URL, 
            and our AI model analyzes linguistic patterns, sentiment indicators, and factual consistency 
            to provide real-time predictions with confidence scores.
          </p>
        </div>
        <div className="grid grid-3">
          <div className="card feature-card">
            <div className="feature-icon">📊</div>
            <h3>Instant Analysis</h3>
            <p>Get predictions in seconds with advanced ML models analyzing text patterns and linguistic features.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">📈</div>
            <h3>Confidence Scores</h3>
            <p>Understand prediction reliability with percentage-based confidence metrics and detailed explanations.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">💡</div>
            <h3>Sentiment Analysis</h3>
            <p>Analyze emotional tone and language patterns that typically indicate misinformation.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Privacy First</h3>
            <p>Your submitted content is processed securely and never stored in our databases.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Cloud-Powered</h3>
            <p>Deployed on AWS with auto-scaling, ensuring 99.9% uptime and sub-second latency.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Fully responsive design works seamlessly on smartphones, tablets, and desktops.</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container section benefits-section">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>For Students</h3>
            <p>Verify research sources and academic materials to avoid spreading misinformation in essays and projects.</p>
          </div>
          <div className="benefit-item">
            <h3>For Journalists</h3>
            <p>Fact-check stories before publication and validate information from various sources.</p>
          </div>
          <div className="benefit-item">
            <h3>For Social Media Users</h3>
            <p>Make informed decisions before sharing content and protect your online credibility.</p>
          </div>
          <div className="benefit-item">
            <h3>For Content Creators</h3>
            <p>Understand sentiment and authenticity metrics to optimize your content strategy.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Submit Content</h3>
            <p>Paste your news text or provide a URL for analysis</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analysis</h3>
            <p>Our ML model analyzes linguistic patterns and content features</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Results</h3>
            <p>Receive REAL or FAKE prediction with confidence score</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>View Details</h3>
            <p>Analyze sentiment, timestamps, and detailed explanations</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container section cta-section">
        <div className="cta-card">
          <h2>Ready to Detect Fake News?</h2>
          <p>Start checking news authenticity now with our free prototype</p>
          <Link to="/detect" className="btn btn-primary">Start Detection</Link>
        </div>
      </section>

      {/* Prototype Info */}
      <section className="container section">
        <div className="alert alert-info">
          <strong>💬 About This Version:</strong> This is a prototype demonstrating FakeGuard's core features. 
          Future MVP will include multi-language support, browser extension, API integration, and advanced analytics.
        </div>
      </section>
    </div>
  );
}

export default HomePage;
