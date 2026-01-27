import React, { useState, useEffect } from 'react';
import './DashboardPage.css';

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState({
    totalAnalysis: 12543,
    todayAnalysis: 342,
    accuracyScore: 87.3,
    avgLatency: 342,
    systemUptime: 99.98,
    activeUsers: 342,
    successRate: 98.7,
    errorRate: 1.3,
    recentAnalyses: [
      { id: 1, text: 'Breaking: New COVID variant discovered...', prediction: 'FAKE', confidence: 92, time: '2 min ago' },
      { id: 2, text: 'Market closes with record highs as tech stocks surge...', prediction: 'REAL', confidence: 88, time: '5 min ago' },
      { id: 3, text: 'Celebrity announces retirement due to shocking allegations...', prediction: 'FAKE', confidence: 85, time: '8 min ago' },
      { id: 4, text: 'Government announces new environmental policy...', prediction: 'REAL', confidence: 91, time: '12 min ago' },
      { id: 5, text: 'Scientists discover cure for all diseases...', prediction: 'FAKE', confidence: 94, time: '15 min ago' },
    ],
    modelInfo: {
      version: '1.0.0',
      trained: 'Feb 2025',
      accuracy: '87.3%',
      latency: '342ms',
      framework: 'Scikit-learn + XGBoost',
      datasets: '25K articles',
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardData(prev => ({
        ...prev,
        totalAnalysis: prev.totalAnalysis + Math.floor(Math.random() * 5),
        todayAnalysis: prev.todayAnalysis + Math.floor(Math.random() * 3),
        activeUsers: 340 + Math.floor(Math.random() * 20),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <p className="page-description">
          Real-time FakeGuard system monitoring and administration dashboard for checking 
          platform performance, analysis counts, and model statistics.
        </p>

        {/* Status Overview */}
        <section className="section overview-section">
          <h2>System Overview</h2>
          <div className="status-grid">
            <div className="status-card">
              <div className="status-icon">📊</div>
              <div className="status-content">
                <div className="status-label">Total Analyses</div>
                <div className="status-value">{dashboardData.totalAnalysis.toLocaleString()}</div>
                <div className="status-subtitle">All-time predictions</div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon">📈</div>
              <div className="status-content">
                <div className="status-label">Today's Analyses</div>
                <div className="status-value">{dashboardData.todayAnalysis}</div>
                <div className="status-subtitle">+{Math.floor(Math.random() * 50)} since yesterday</div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon">🎯</div>
              <div className="status-content">
                <div className="status-label">Model Accuracy</div>
                <div className="status-value">{dashboardData.accuracyScore}%</div>
                <div className="status-subtitle">Validation dataset</div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon">⚡</div>
              <div className="status-content">
                <div className="status-label">Avg Latency</div>
                <div className="status-value">{dashboardData.avgLatency}ms</div>
                <div className="status-subtitle">p50 response time</div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon">🟢</div>
              <div className="status-content">
                <div className="status-label">System Uptime</div>
                <div className="status-value">{dashboardData.systemUptime}%</div>
                <div className="status-subtitle">30-day availability</div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon">👥</div>
              <div className="status-content">
                <div className="status-label">Active Users</div>
                <div className="status-value">{dashboardData.activeUsers}</div>
                <div className="status-subtitle">Real-time connections</div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Metrics */}
        <section className="section health-metrics-section">
          <h2>Health Metrics</h2>
          <div className="grid grid-2">
            <div className="card metric-box">
              <h3>Success Rate</h3>
              <div className="metric-large">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${dashboardData.successRate}%`}}></div>
                </div>
                <span className="metric-percentage">{dashboardData.successRate}%</span>
              </div>
              <p className="metric-desc">Successful prediction requests</p>
            </div>

            <div className="card metric-box">
              <h3>Error Rate</h3>
              <div className="metric-large">
                <div className="progress-bar">
                  <div className="progress-fill error" style={{width: `${dashboardData.errorRate}%`}}></div>
                </div>
                <span className="metric-percentage">{dashboardData.errorRate}%</span>
              </div>
              <p className="metric-desc">Failed or errored requests</p>
            </div>
          </div>
        </section>

        {/* Recent Analyses */}
        <section className="section recent-analyses-section">
          <h2>Recent Analyses (Last 30 minutes)</h2>
          <div className="analyses-table card">
            <div className="table-header">
              <div className="col-text">Text Preview</div>
              <div className="col-prediction">Prediction</div>
              <div className="col-confidence">Confidence</div>
              <div className="col-time">Time</div>
            </div>
            {dashboardData.recentAnalyses.map((analysis) => (
              <div key={analysis.id} className="table-row">
                <div className="col-text">
                  <span className="truncate">{analysis.text}</span>
                </div>
                <div className="col-prediction">
                  <span className={`prediction-badge ${analysis.prediction.toLowerCase()}`}>
                    {analysis.prediction}
                  </span>
                </div>
                <div className="col-confidence">
                  <div className="confidence-mini">
                    <div className="confidence-bar">
                      <div 
                        className="confidence-fill" 
                        style={{width: `${analysis.confidence}%`}}
                      ></div>
                    </div>
                    <span>{analysis.confidence}%</span>
                  </div>
                </div>
                <div className="col-time">{analysis.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Information */}
        <section className="section model-info-section">
          <h2>ML Model Information</h2>
          <div className="grid grid-2">
            <div className="card model-card">
              <h3>🤖 Model Details</h3>
              <div className="info-group">
                <div className="info-pair">
                  <span>Model Version</span>
                  <span className="info-value">{dashboardData.modelInfo.version}</span>
                </div>
                <div className="info-pair">
                  <span>Training Date</span>
                  <span className="info-value">{dashboardData.modelInfo.trained}</span>
                </div>
                <div className="info-pair">
                  <span>Framework</span>
                  <span className="info-value">{dashboardData.modelInfo.framework}</span>
                </div>
                <div className="info-pair">
                  <span>Training Datasets</span>
                  <span className="info-value">{dashboardData.modelInfo.datasets}</span>
                </div>
              </div>
            </div>

            <div className="card model-card">
              <h3>📊 Model Performance</h3>
              <div className="info-group">
                <div className="info-pair">
                  <span>Accuracy</span>
                  <span className="info-value">{dashboardData.modelInfo.accuracy}</span>
                </div>
                <div className="info-pair">
                  <span>Avg Latency</span>
                  <span className="info-value">{dashboardData.modelInfo.latency}</span>
                </div>
                <div className="info-pair">
                  <span>Model Size</span>
                  <span className="info-value">125MB</span>
                </div>
                <div className="info-pair">
                  <span>Ensemble Models</span>
                  <span className="info-value">4 classifiers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="section performance-stats-section">
          <h2>Performance Statistics</h2>
          <div className="grid grid-3">
            <div className="stat-box card">
              <div className="stat-number">25K</div>
              <div className="stat-label">Training Articles</div>
              <p>Dataset used to train models</p>
            </div>

            <div className="stat-box card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Features</div>
              <p>Linguistic features extracted</p>
            </div>

            <div className="stat-box card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">RPS Capacity</div>
              <p>Requests per second</p>
            </div>

            <div className="stat-box card">
              <div className="stat-number">92%</div>
              <div className="stat-label">Precision</div>
              <p>False positive rate</p>
            </div>

            <div className="stat-box card">
              <div className="stat-number">88%</div>
              <div className="stat-label">Recall</div>
              <p>False negative rate</p>
            </div>

            <div className="stat-box card">
              <div className="stat-number">0.933</div>
              <div className="stat-label">ROC-AUC</div>
              <p>Classification performance</p>
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="section system-status-section">
          <h2>System Status</h2>
          <div className="grid grid-2">
            <div className="card status-detail">
              <h3>🟢 Services Status</h3>
              <div className="service-list">
                <div className="service">
                  <span className="service-dot online"></span>
                  <span>API Server</span>
                  <span className="service-status">Online</span>
                </div>
                <div className="service">
                  <span className="service-dot online"></span>
                  <span>ML Model</span>
                  <span className="service-status">Running</span>
                </div>
                <div className="service">
                  <span className="service-dot online"></span>
                  <span>Database</span>
                  <span className="service-status">Connected</span>
                </div>
                <div className="service">
                  <span className="service-dot online"></span>
                  <span>Monitoring</span>
                  <span className="service-status">Active</span>
                </div>
                <div className="service">
                  <span className="service-dot online"></span>
                  <span>Caching Layer</span>
                  <span className="service-status">Online</span>
                </div>
              </div>
            </div>

            <div className="card status-detail">
              <h3>⚙️ Infrastructure</h3>
              <div className="infra-list">
                <div className="infra-item">
                  <span>Deployment</span>
                  <span className="infra-value">AWS EC2 (Auto Scaling)</span>
                </div>
                <div className="infra-item">
                  <span>Container Runtime</span>
                  <span className="infra-value">Docker + ECS</span>
                </div>
                <div className="infra-item">
                  <span>Load Balancer</span>
                  <span className="infra-value">AWS ALB</span>
                </div>
                <div className="infra-item">
                  <span>Monitoring</span>
                  <span className="infra-value">CloudWatch</span>
                </div>
                <div className="infra-item">
                  <span>Logging</span>
                  <span className="infra-value">CloudWatch Logs + S3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Actions */}
        <section className="section admin-actions-section">
          <h2>Admin Actions</h2>
          <div className="actions-grid">
            <button className="action-btn action-primary">
              <span>📊</span>
              <span>View Full Analytics</span>
            </button>
            <button className="action-btn action-primary">
              <span>🤖</span>
              <span>Retrain Model</span>
            </button>
            <button className="action-btn action-primary">
              <span>🔧</span>
              <span>System Configuration</span>
            </button>
            <button className="action-btn action-secondary">
              <span>📥</span>
              <span>Export Reports</span>
            </button>
            <button className="action-btn action-secondary">
              <span>⚠️</span>
              <span>View Alerts</span>
            </button>
            <button className="action-btn action-secondary">
              <span>🔐</span>
              <span>Security Settings</span>
            </button>
          </div>
        </section>

        {/* Last Updated */}
        <div className="last-updated">
          <p>Dashboard updated: <strong>Just now</strong></p>
          <p className="note">Metrics refresh every 5 seconds</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
