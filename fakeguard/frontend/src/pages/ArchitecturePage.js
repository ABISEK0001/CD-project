import React from 'react';
import './ArchitecturePage.css';

function ArchitecturePage() {
  return (
    <div className="architecture-page">
      <div className="container">
        <h1>System Architecture</h1>
        <p className="page-description">
          FakeGuard is built on a scalable, cloud-native architecture designed for high-performance 
          fake news detection with minimal latency.
        </p>

        {/* Architecture Diagram */}
        <section className="section architecture-diagram">
          <h2>System Architecture Flow</h2>
          <div className="diagram-container">
            <div className="diagram">
              <div className="arch-box user">
                <span className="icon">👤</span>
                <div className="label">User</div>
              </div>
              <div className="arrow">→</div>
              
              <div className="arch-box frontend">
                <span className="icon">🌐</span>
                <div className="label">Web UI (React)</div>
                <small>Responsive Frontend</small>
              </div>
              <div className="arrow">→</div>

              <div className="arch-box api">
                <span className="icon">⚙️</span>
                <div className="label">FastAPI Backend</div>
                <small>API Server (Port 8000)</small>
              </div>
              <div className="arrow">→</div>

              <div className="arch-box ml">
                <span className="icon">🤖</span>
                <div className="label">ML Pipeline</div>
                <small>NLP + Classifiers</small>
              </div>
              <div className="arrow">→</div>

              <div className="arch-box result">
                <span className="icon">✓/✗</span>
                <div className="label">Prediction Result</div>
                <small>REAL | FAKE</small>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Components */}
        <section className="section components-section">
          <h2>Architecture Components</h2>
          <div className="grid grid-2">
            <div className="card component-card">
              <h3>🌐 Frontend Layer</h3>
              <div className="tech-stack">
                <span className="tech-badge">React 18</span>
                <span className="tech-badge">React Router</span>
                <span className="tech-badge">Axios</span>
                <span className="tech-badge">CSS3</span>
              </div>
              <p>
                Single-Page Application (SPA) with responsive design. Handles user input, 
                sends requests to backend, and displays results in real-time.
              </p>
            </div>

            <div className="card component-card">
              <h3>⚙️ Backend API</h3>
              <div className="tech-stack">
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Python 3.9+</span>
                <span className="tech-badge">Pydantic</span>
                <span className="tech-badge">CORS</span>
              </div>
              <p>
                RESTful API server handling prediction requests. Validates input, 
                orchestrates ML pipeline, and returns predictions with confidence scores.
              </p>
            </div>

            <div className="card component-card">
              <h3>🤖 ML Pipeline</h3>
              <div className="tech-stack">
                <span className="tech-badge">Scikit-learn</span>
                <span className="tech-badge">NLTK</span>
                <span className="tech-badge">TextBlob</span>
                <span className="tech-badge">Pickle</span>
              </div>
              <p>
                Trained ML models for classification. Includes feature extraction, 
                text preprocessing, and ensemble classifiers.
              </p>
            </div>

            <div className="card component-card">
              <h3>☁️ Cloud Infrastructure</h3>
              <div className="tech-stack">
                <span className="tech-badge">AWS EC2</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">CloudWatch</span>
                <span className="tech-badge">Load Balancer</span>
              </div>
              <p>
                Containerized deployment on AWS with auto-scaling, monitoring, 
                and load balancing for high availability.
              </p>
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="section data-flow">
          <h2>Request Processing Flow</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-icon">1️⃣</div>
              <h4>User Input</h4>
              <p>User submits news text via web interface</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">2️⃣</div>
              <h4>Validation</h4>
              <p>Backend validates input (length, format)</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">3️⃣</div>
              <h4>Preprocessing</h4>
              <p>Text cleaning, tokenization, normalization</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">4️⃣</div>
              <h4>Feature Extraction</h4>
              <p>Extract 500+ linguistic and semantic features</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">5️⃣</div>
              <h4>Classification</h4>
              <p>Multiple ML models predict authenticity</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">6️⃣</div>
              <h4>Post-Processing</h4>
              <p>Ensemble voting, confidence calculation</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">7️⃣</div>
              <h4>Sentiment Analysis</h4>
              <p>Analyze emotional tone and language patterns</p>
            </div>
            <div className="flow-step">
              <div className="step-icon">8️⃣</div>
              <h4>Return Results</h4>
              <p>Send prediction + confidence to frontend</p>
            </div>
          </div>
        </section>

        {/* Cloud & DevOps */}
        <section className="section cloud-devops">
          <h2>Cloud & DevOps Integration</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🐳 Containerization</h3>
              <ul>
                <li>✓ Docker container for reproducible deployments</li>
                <li>✓ Multi-stage builds for optimized images</li>
                <li>✓ Lightweight Alpine Linux base</li>
                <li>✓ Container size optimized for fast pulling</li>
              </ul>
            </div>

            <div className="card">
              <h3>🚀 CI/CD Pipeline</h3>
              <ul>
                <li>✓ GitHub Actions automated tests</li>
                <li>✓ Build → Test → Push → Deploy workflow</li>
                <li>✓ Automated version tagging</li>
                <li>✓ Rollback capabilities on failures</li>
              </ul>
            </div>

            <div className="card">
              <h3>📊 Monitoring & Logging</h3>
              <ul>
                <li>✓ CloudWatch logs aggregation</li>
                <li>✓ Real-time performance metrics</li>
                <li>✓ Error tracking and alerts</li>
                <li>✓ Request latency monitoring</li>
              </ul>
            </div>

            <div className="card">
              <h3>🔄 Auto-Scaling</h3>
              <ul>
                <li>✓ Horizontal scaling based on CPU/memory</li>
                <li>✓ Load balancer distribution</li>
                <li>✓ Zero-downtime deployments</li>
                <li>✓ Auto-rollback on errors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="section performance">
          <h2>Performance Specifications</h2>
          <div className="grid grid-4">
            <div className="metric-box">
              <div className="metric-value">&lt; 500ms</div>
              <div className="metric-label">Avg Latency</div>
            </div>
            <div className="metric-box">
              <div className="metric-value">87%</div>
              <div className="metric-label">Model Accuracy</div>
            </div>
            <div className="metric-box">
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Uptime SLA</div>
            </div>
            <div className="metric-box">
              <div className="metric-value">10K+</div>
              <div className="metric-label">RPS Capacity</div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="section security">
          <h2>Security Measures</h2>
          <div className="grid grid-3">
            <div className="card security-card">
              <span className="security-icon">🔒</span>
              <h3>Data Privacy</h3>
              <p>No text storage, end-to-end encryption, GDPR compliant</p>
            </div>
            <div className="card security-card">
              <span className="security-icon">🛡️</span>
              <h3>Input Validation</h3>
              <p>All inputs validated, sanitized, and checked for injection attacks</p>
            </div>
            <div className="card security-card">
              <span className="security-icon">🔐</span>
              <h3>API Security</h3>
              <p>Rate limiting, CORS protection, HTTPS only, API authentication</p>
            </div>
          </div>
        </section>

        {/* Deployment Diagram */}
        <section className="section deployment">
          <h2>Deployment Stack</h2>
          <div className="deployment-box card">
            <div className="deployment-layer">
              <strong>Client Layer</strong>
              <p>Web Browser (React SPA) + Mobile Browser</p>
            </div>
            <div className="divider"></div>
            <div className="deployment-layer">
              <strong>CDN Layer (Future)</strong>
              <p>CloudFront for static assets caching</p>
            </div>
            <div className="divider"></div>
            <div className="deployment-layer">
              <strong>API Layer</strong>
              <p>Load Balancer → Auto Scaling Group → Docker Containers</p>
            </div>
            <div className="divider"></div>
            <div className="deployment-layer">
              <strong>Database Layer (Future MVP)</strong>
              <p>PostgreSQL for analytics + DynamoDB for caching</p>
            </div>
            <div className="divider"></div>
            <div className="deployment-layer">
              <strong>Monitoring Layer</strong>
              <p>CloudWatch + Prometheus + ELK Stack</p>
            </div>
          </div>
        </section>

        {/* Prototype vs MVP */}
        <section className="section prototype-mvp">
          <h2>Prototype vs MVP Features</h2>
          <div className="comparison-grid">
            <div className="card">
              <h3>✓ Current Prototype</h3>
              <ul>
                <li>✓ Text-based news submission</li>
                <li>✓ Real-time ML predictions</li>
                <li>✓ Confidence scoring</li>
                <li>✓ Sentiment analysis</li>
                <li>✓ Responsive web UI</li>
                <li>✓ REST API</li>
              </ul>
            </div>

            <div className="card">
              <h3>🚀 Future MVP (Q2-Q3 2025)</h3>
              <ul>
                <li>🔄 URL/article scraping</li>
                <li>🔄 Multi-language support</li>
                <li>🔄 Source credibility scoring</li>
                <li>🔄 Fact-checking integration</li>
                <li>🔄 Browser extension</li>
                <li>🔄 Premium API tier</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ArchitecturePage;
