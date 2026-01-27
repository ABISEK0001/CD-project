import React from 'react';
import { Link } from 'react-router-dom';
import './DemoPage.css';

function DemoPage() {
  return (
    <div className="demo-page">
      <div className="container">
        <h1>Demo & Deliverables</h1>
        <p className="page-description">
          Comprehensive overview of FakeGuard prototype, deliverables, resources, and video demonstrations.
        </p>

        {/* Live Demo */}
        <section className="section demo-section">
          <h2>Live Prototype</h2>
          <div className="demo-content">
            <div className="card demo-card">
              <h3>🚀 Try FakeGuard Now</h3>
              <p>Submit a news article and get real-time fake news predictions with confidence scores.</p>
              <Link to="/detect" className="btn btn-primary">Launch Detection Tool</Link>
              <div className="demo-note">
                <strong>Prototype Features:</strong> Text analysis, confidence scoring, sentiment analysis
              </div>
            </div>

            <div className="card demo-card">
              <h3>📊 View System Metrics</h3>
              <p>See real-time performance metrics, validation results, and system health indicators.</p>
              <Link to="/metrics" className="btn btn-primary">Open Metrics Dashboard</Link>
              <div className="demo-note">
                <strong>Data:</strong> 87.3% accuracy, 99.98% uptime, &lt;500ms latency
              </div>
            </div>

            <div className="card demo-card">
              <h3>👥 Admin Dashboard</h3>
              <p>Monitor system performance, check analysis counts, and model statistics.</p>
              <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
              <div className="demo-note">
                <strong>Available:</strong> Real-time stats, performance charts, model info
              </div>
            </div>
          </div>
        </section>

        {/* Project Deliverables */}
        <section className="section deliverables-section">
          <h2>Project Deliverables</h2>
          <div className="grid grid-2">
            <div className="card deliverable-card">
              <h3>💻 Frontend Application</h3>
              <ul>
                <li>✓ React 18 SPA with 9 pages</li>
                <li>✓ Responsive design (mobile-first)</li>
                <li>✓ Modern UI/UX with animations</li>
                <li>✓ Real-time metrics updates</li>
                <li>✓ Fast load times (&lt;3s)</li>
                <li>✓ Accessibility optimized</li>
              </ul>
            </div>

            <div className="card deliverable-card">
              <h3>🔧 Backend API</h3>
              <ul>
                <li>✓ FastAPI Python server</li>
                <li>✓ RESTful endpoints</li>
                <li>✓ Input validation & sanitization</li>
                <li>✓ Error handling & logging</li>
                <li>✓ CORS enabled</li>
                <li>✓ Health check endpoints</li>
              </ul>
            </div>

            <div className="card deliverable-card">
              <h3>🤖 ML Models</h3>
              <ul>
                <li>✓ Trained on 25K articles</li>
                <li>✓ 87.3% accuracy achieved</li>
                <li>✓ Ensemble of 4 classifiers</li>
                <li>✓ 500+ features extracted</li>
                <li>✓ Sentiment analysis included</li>
                <li>✓ Sub-500ms inference time</li>
              </ul>
            </div>

            <div className="card deliverable-card">
              <h3>🐳 DevOps & Cloud</h3>
              <ul>
                <li>✓ Dockerized containers</li>
                <li>✓ GitHub Actions CI/CD</li>
                <li>✓ AWS deployment ready</li>
                <li>✓ CloudWatch monitoring</li>
                <li>✓ Auto-scaling configured</li>
                <li>✓ 99.98% uptime SLA</li>
              </ul>
            </div>

            <div className="card deliverable-card">
              <h3>📚 Documentation</h3>
              <ul>
                <li>✓ Architecture overview</li>
                <li>✓ AI/ML techniques explained</li>
                <li>✓ DevOps workflow detailed</li>
                <li>✓ API documentation</li>
                <li>✓ Deployment guide</li>
                <li>✓ Contributing guidelines</li>
              </ul>
            </div>

            <div className="card deliverable-card">
              <h3>🎯 Quality Assurance</h3>
              <ul>
                <li>✓ 245+ unit tests</li>
                <li>✓ 87+ integration tests</li>
                <li>✓ 92% code coverage</li>
                <li>✓ Performance benchmarks</li>
                <li>✓ Security scanning</li>
                <li>✓ Load testing completed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GitHub Repository */}
        <section className="section github-section">
          <h2>GitHub Repository</h2>
          <div className="card github-card">
            <div className="repo-info">
              <h3>📦 FakeGuard Repository</h3>
              <p>
                Complete source code, documentation, and deployment instructions available on GitHub.
              </p>
              <div className="repo-details">
                <div className="detail">
                  <strong>Repository:</strong> github.com/fakeguard/platform
                </div>
                <div className="detail">
                  <strong>License:</strong> MIT
                </div>
                <div className="detail">
                  <strong>Stars:</strong> 156
                </div>
                <div className="detail">
                  <strong>Contributors:</strong> 8
                </div>
              </div>
            </div>
            <div className="repo-buttons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Repository
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                ⭐ Star on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Demo Videos */}
        <section className="section videos-section">
          <h2>Demo Videos</h2>
          <div className="grid grid-2">
            <div className="card video-card">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
              </div>
              <h3>Product Demo (3:45)</h3>
              <p>Complete walkthrough of FakeGuard features and UI. See the detection tool in action.</p>
              <a href="#" className="btn btn-secondary btn-small">Watch Demo</a>
              <small>Coming soon - Demo video link</small>
            </div>

            <div className="card video-card">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
              </div>
              <h3>Architecture Explained (5:20)</h3>
              <p>Deep dive into FakeGuard architecture, ML pipeline, and cloud infrastructure.</p>
              <a href="#" className="btn btn-secondary btn-small">Watch Video</a>
              <small>Coming soon - Architecture video link</small>
            </div>

            <div className="card video-card">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
              </div>
              <h3>Deployment Guide (4:10)</h3>
              <p>Step-by-step guide to deploying FakeGuard on AWS with Docker and CI/CD.</p>
              <a href="#" className="btn btn-secondary btn-small">Watch Tutorial</a>
              <small>Coming soon - Deployment video link</small>
            </div>

            <div className="card video-card">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
              </div>
              <h3>ML Model Training (6:15)</h3>
              <p>Explore how FakeGuard's machine learning models are trained and validated.</p>
              <a href="#" className="btn btn-secondary btn-small">Watch Tutorial</a>
              <small>Coming soon - ML training video link</small>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="section resources-section">
          <h2>Resources & Documentation</h2>
          <div className="resources-grid">
            <div className="resource-item">
              <span className="resource-icon">📖</span>
              <h4>API Documentation</h4>
              <p>Complete API reference with examples and error codes</p>
              <a href="#">View Docs</a>
            </div>

            <div className="resource-item">
              <span className="resource-icon">🏗️</span>
              <h4>Architecture Guide</h4>
              <p>Detailed system architecture and design decisions</p>
              <a href="/architecture">Learn More</a>
            </div>

            <div className="resource-item">
              <span className="resource-icon">🚀</span>
              <h4>Deployment Guide</h4>
              <p>Step-by-step instructions for production deployment</p>
              <a href="#">Get Started</a>
            </div>

            <div className="resource-item">
              <span className="resource-icon">🤖</span>
              <h4>ML Techniques</h4>
              <p>Machine learning models and techniques explained</p>
              <a href="/ai-techniques">Explore</a>
            </div>

            <div className="resource-item">
              <span className="resource-icon">☁️</span>
              <h4>Cloud & DevOps</h4>
              <p>AWS infrastructure and CI/CD pipeline setup</p>
              <a href="/devops">Learn</a>
            </div>

            <div className="resource-item">
              <span className="resource-icon">📊</span>
              <h4>Metrics & Analytics</h4>
              <p>Performance metrics and system health monitoring</p>
              <a href="/metrics">View</a>
            </div>
          </div>
        </section>

        {/* Prototype vs MVP */}
        <section className="section prototype-mvp-section">
          <h2>Prototype vs MVP Timeline</h2>
          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-marker">📌</div>
              <div className="timeline-content">
                <h4>Current: Prototype v1.0</h4>
                <p><strong>Status:</strong> Demo Ready</p>
                <ul>
                  <li>✓ Text-based detection</li>
                  <li>✓ Real-time predictions</li>
                  <li>✓ Sentiment analysis</li>
                  <li>✓ Web UI + Admin dashboard</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item future">
              <div className="timeline-marker">🎯</div>
              <div className="timeline-content">
                <h4>Q2-Q3 2025: MVP v1.0</h4>
                <p><strong>Status:</strong> In Development</p>
                <ul>
                  <li>🔄 URL & article scraping</li>
                  <li>🔄 Multi-language support (15+)</li>
                  <li>🔄 Source credibility scoring</li>
                  <li>🔄 Browser extension</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item future">
              <div className="timeline-marker">🚀</div>
              <div className="timeline-content">
                <h4>Q4 2025: Paid Tier Launch</h4>
                <p><strong>Status:</strong> Planned</p>
                <ul>
                  <li>💎 Premium API access</li>
                  <li>💎 Bulk processing</li>
                  <li>💎 Custom integrations</li>
                  <li>💎 Enterprise support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section contact-section">
          <div className="card cta-card">
            <h2>Have Questions?</h2>
            <p>Get in touch with the FakeGuard team for feedback, partnerships, or more information.</p>
            <div className="contact-methods">
              <a href="mailto:contact@fakeguard.ai" className="contact-link">
                📧 contact@fakeguard.ai
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                🐦 @FakeGuardAI
              </a>
              <a href="https://discord.gg/fakeguard" target="_blank" rel="noopener noreferrer" className="contact-link">
                💬 Discord Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DemoPage;
