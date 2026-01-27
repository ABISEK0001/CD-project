import React from 'react';
import './DevOpsPage.css';

function DevOpsPage() {
  return (
    <div className="devops-page">
      <div className="container">
        <h1>Cloud & DevOps Workflow</h1>
        <p className="page-description">
          FakeGuard is built with modern DevOps practices including CI/CD automation, 
          containerization, and cloud infrastructure for reliable, scalable deployment.
        </p>

        {/* CI/CD Pipeline */}
        <section className="section cicd-section">
          <h2>GitHub Actions CI/CD Pipeline</h2>
          <div className="pipeline-diagram card">
            <div className="pipeline-stage">
              <div className="stage-title">📝 Code Push</div>
              <div className="stage-desc">Developer pushes to main branch</div>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-stage">
              <div className="stage-title">🧪 Tests</div>
              <div className="stage-desc">Run unit & integration tests</div>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-stage">
              <div className="stage-title">🔨 Build</div>
              <div className="stage-desc">Build Docker image</div>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-stage">
              <div className="stage-title">📦 Push</div>
              <div className="stage-desc">Push to Docker Hub</div>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-stage">
              <div className="stage-title">🚀 Deploy</div>
              <div className="stage-desc">Auto-deploy to AWS</div>
            </div>
          </div>
        </section>

        {/* GitHub Actions Workflow */}
        <section className="section workflow-section">
          <h2>Automated Workflow</h2>
          <div className="grid grid-2">
            <div className="card workflow-card">
              <h3>🔍 Code Quality Checks</h3>
              <ul>
                <li>✓ Linting with ESLint & Pylint</li>
                <li>✓ Code formatting with Prettier</li>
                <li>✓ Security scanning</li>
                <li>✓ Dependency vulnerability checks</li>
                <li>✓ Code coverage reporting</li>
              </ul>
            </div>

            <div className="card workflow-card">
              <h3>🧪 Automated Testing</h3>
              <ul>
                <li>✓ Jest for React components</li>
                <li>✓ Pytest for Python backend</li>
                <li>✓ Integration tests</li>
                <li>✓ API endpoint testing</li>
                <li>✓ Performance benchmarks</li>
              </ul>
            </div>

            <div className="card workflow-card">
              <h3>🐳 Docker Container Build</h3>
              <ul>
                <li>✓ Multi-stage builds</li>
                <li>✓ Lightweight Alpine Linux base</li>
                <li>✓ Image size optimization</li>
                <li>✓ Security scanning (Trivy)</li>
                <li>✓ Automated tagging with commit SHA</li>
              </ul>
            </div>

            <div className="card workflow-card">
              <h3>🌐 Registry & Deployment</h3>
              <ul>
                <li>✓ Push to Docker Hub</li>
                <li>✓ AWS ECR storage</li>
                <li>✓ Kubernetes deployment (Future)</li>
                <li>✓ Rolling updates</li>
                <li>✓ Automated rollback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Docker */}
        <section className="section docker-section">
          <h2>Docker Containerization</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🐳 Frontend Dockerfile</h3>
              <div className="code-block">
                <code>
FROM node:18-alpine<br/>
WORKDIR /app<br/>
COPY package*.json .<br/>
RUN npm install<br/>
COPY . .<br/>
RUN npm run build<br/>
FROM nginx:alpine<br/>
COPY --from=0 /app/build /usr/share/nginx/html<br/>
EXPOSE 80<br/>
CMD ["nginx", "-g", "daemon off;"]
                </code>
              </div>
            </div>

            <div className="card">
              <h3>🐍 Backend Dockerfile</h3>
              <div className="code-block">
                <code>
FROM python:3.9-slim<br/>
WORKDIR /app<br/>
COPY requirements.txt .<br/>
RUN pip install -r requirements.txt<br/>
COPY . .<br/>
EXPOSE 8000<br/>
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Infrastructure */}
        <section className="section cloud-section">
          <h2>AWS Cloud Infrastructure</h2>
          <div className="grid grid-2">
            <div className="card infra-card">
              <h3>☁️ Compute</h3>
              <ul>
                <li>EC2 Auto Scaling Group</li>
                <li>t3.medium instances</li>
                <li>Min 2 / Max 10 instances</li>
                <li>Target CPU: 70%</li>
                <li>Health checks: 30s interval</li>
              </ul>
            </div>

            <div className="card infra-card">
              <h3>⚖️ Load Balancing</h3>
              <ul>
                <li>Application Load Balancer</li>
                <li>Sticky sessions: 1 day</li>
                <li>Health check path: /api/health</li>
                <li>Timeout: 60 seconds</li>
                <li>SSL/TLS termination</li>
              </ul>
            </div>

            <div className="card infra-card">
              <h3>📦 Container Registry</h3>
              <ul>
                <li>Amazon ECR</li>
                <li>Image lifecycle policies</li>
                <li>Tag immutability</li>
                <li>Automated scan on push</li>
                <li>Multi-region replication</li>
              </ul>
            </div>

            <div className="card infra-card">
              <h3>📊 Monitoring</h3>
              <ul>
                <li>CloudWatch Logs</li>
                <li>CloudWatch Metrics</li>
                <li>Custom dashboards</li>
                <li>SNS alerts</li>
                <li>X-Ray tracing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Monitoring & Logging */}
        <section className="section monitoring-section">
          <h2>Monitoring & Logging</h2>
          <div className="grid grid-2">
            <div className="card monitoring-card">
              <h3>📊 Key Metrics</h3>
              <ul>
                <li>Request latency (p50, p95, p99)</li>
                <li>Request rate (RPS)</li>
                <li>Error rate (4xx, 5xx)</li>
                <li>CPU utilization</li>
                <li>Memory usage</li>
                <li>Disk I/O</li>
                <li>Network throughput</li>
                <li>Model inference time</li>
              </ul>
            </div>

            <div className="card monitoring-card">
              <h3>🔔 Alerting Rules</h3>
              <ul>
                <li>Error rate &gt; 2% → P1 alert</li>
                <li>Latency p99 &gt; 2s → P2 alert</li>
                <li>CPU &gt; 85% → Scale up</li>
                <li>Disk space &gt; 80% → Alert</li>
                <li>Memory leak detection</li>
                <li>Prediction accuracy drop</li>
                <li>API downtime detection</li>
              </ul>
            </div>

            <div className="card monitoring-card">
              <h3>📝 Log Management</h3>
              <ul>
                <li>Centralized logging with CloudWatch</li>
                <li>Log levels: DEBUG, INFO, WARN, ERROR</li>
                <li>Structured logging (JSON)</li>
                <li>Request ID tracking</li>
                <li>Error stack traces</li>
                <li>30-day retention policy</li>
                <li>Log export to S3</li>
              </ul>
            </div>

            <div className="card monitoring-card">
              <h3>📈 Performance Dashboards</h3>
              <ul>
                <li>Real-time metrics view</li>
                <li>Service health status</li>
                <li>Error rate trends</li>
                <li>Latency distributions</li>
                <li>Traffic patterns</li>
                <li>Model accuracy tracking</li>
                <li>Cost analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="section deployment-process">
          <h2>Deployment Process</h2>
          <div className="process-grid">
            <div className="process-box">
              <span className="process-number">1</span>
              <h4>Code Review</h4>
              <p>Pull request review & approval</p>
            </div>
            <div className="process-box">
              <span className="process-number">2</span>
              <h4>Automated Tests</h4>
              <p>All tests must pass</p>
            </div>
            <div className="process-box">
              <span className="process-number">3</span>
              <h4>Build & Scan</h4>
              <p>Docker build with security scan</p>
            </div>
            <div className="process-box">
              <span className="process-number">4</span>
              <h4>Staging Deploy</h4>
              <p>Deploy to staging environment</p>
            </div>
            <div className="process-box">
              <span className="process-number">5</span>
              <h4>Smoke Tests</h4>
              <p>Verify core functionality</p>
            </div>
            <div className="process-box">
              <span className="process-number">6</span>
              <h4>Production Deploy</h4>
              <p>Blue-green deployment</p>
            </div>
            <div className="process-box">
              <span className="process-number">7</span>
              <h4>Health Checks</h4>
              <p>Monitor metrics post-deployment</p>
            </div>
            <div className="process-box">
              <span className="process-number">8</span>
              <h4>Complete</h4>
              <p>Deployment finished</p>
            </div>
          </div>
        </section>

        {/* Environment Configuration */}
        <section className="section environments">
          <h2>Environment Management</h2>
          <div className="grid grid-3">
            <div className="card env-card">
              <h3>💻 Development</h3>
              <p>Local machine setup</p>
              <ul>
                <li>Hot reload enabled</li>
                <li>Debug logging</li>
                <li>Local database</li>
                <li>Mock ML model</li>
              </ul>
            </div>
            <div className="card env-card">
              <h3>🧪 Staging</h3>
              <p>Pre-production testing</p>
              <ul>
                <li>AWS environment</li>
                <li>Production-like setup</li>
                <li>Real ML model</li>
                <li>Load testing</li>
              </ul>
            </div>
            <div className="card env-card">
              <h3>🚀 Production</h3>
              <p>Live customer environment</p>
              <ul>
                <li>High availability</li>
                <li>Auto-scaling enabled</li>
                <li>Real-time monitoring</li>
                <li>Disaster recovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="section best-practices">
          <h2>DevOps Best Practices</h2>
          <div className="practices-list">
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Infrastructure as Code (IaC)</strong>
                <p>AWS CloudFormation/Terraform for reproducible infrastructure</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Immutable Infrastructure</strong>
                <p>No manual server changes, rebuild from containers</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Blue-Green Deployment</strong>
                <p>Zero-downtime updates with instant rollback capability</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Continuous Integration</strong>
                <p>Automated testing on every commit</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Continuous Deployment</strong>
                <p>Automated deployment pipeline to production</p>
              </div>
            </div>
            <div className="practice-item">
              <span className="practice-icon">✓</span>
              <div>
                <strong>Disaster Recovery</strong>
                <p>Automated backups, multi-region failover, RTO &lt; 1 hour</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DevOpsPage;
