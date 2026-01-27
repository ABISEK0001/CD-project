# FakeGuard Architecture Documentation

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FakeGuard Platform                        │
└─────────────────────────────────────────────────────────────────┘

                        User Browser (Client)
                              │
                              │ HTTP/HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Frontend Application                          │
│                      (React SPA)                                 │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │     Home     │  │  Detection   │  │   Results    │  ...    │
│  │   (Page)     │  │   (Page)     │  │   (Page)     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│         │                │                   │                  │
│         └────────────────┼───────────────────┘                  │
│                          ▼                                       │
│                   React Router                                   │
│                   State (useState)                               │
│                   Effects (useEffect)                            │
│                   Axios HTTP Client                              │
├─────────────────────────────────────────────────────────────────┤
│  Port: 3000 | Engine: Node.js/React 18 | Bundle: ~200KB        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ REST API Calls
                              │ (JSON over HTTP)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Backend API Server                            │
│                     (FastAPI/Python)                            │
├─────────────────────────────────────────────────────────────────┤
│  Endpoints:                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ GET  /              → API Info                           │   │
│  │ GET  /api/health    → Health Check                       │   │
│  │ POST /api/predict   → Fake News Detection               │   │
│  │ GET  /api/stats     → System Statistics                 │   │
│  │ GET  /api/model-info → ML Model Details                 │   │
│  └──────────────────────────────────────────────────────────┘   │
│                          │                                       │
│                   Pydantic Validation                            │
│                   CORS Middleware                                │
│                   Error Handling                                 │
├─────────────────────────────────────────────────────────────────┤
│  Port: 8000 | Framework: FastAPI 0.104 | Language: Python 3.9  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ML Prediction Engine                          │
│                  (Fake News Detector)                            │
├─────────────────────────────────────────────────────────────────┤
│  Input: Text Article                                             │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Feature Extraction                                       │   │
│  │ ├─ Word Count          │ ├─ Word Frequency            │   │
│  │ ├─ Sentence Count      │ ├─ Capitalization Ratio      │   │
│  │ ├─ Punctuation Count   │ ├─ Emotional Indicators      │   │
│  └──────────────────────────────────────────────────────────┘   │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Pattern Matching                                         │   │
│  │ ├─ Fake Indicators  (shocking, breaking, conspiracy)    │   │
│  │ ├─ Real Indicators  (according to, study shows)         │   │
│  │ └─ Sentiment Keywords                                   │   │
│  └──────────────────────────────────────────────────────────┘   │
│           │                                                      │
│           ▼                                                      │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Classification & Scoring                                 │   │
│  │ ├─ Prediction: REAL or FAKE                             │   │
│  │ ├─ Confidence: 50-99%                                   │   │
│  │ └─ Sentiment: positive/negative/neutral                 │   │
│  └──────────────────────────────────────────────────────────┘   │
│           │                                                      │
│           ▼                                                      │
│  Output: JSON Response                                           │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
User Action → Frontend Request → Axios POST
                                    │
                                    ▼
                          Backend Validation (Pydantic)
                                    │
                                    ├─ Check text length (20-5000)
                                    ├─ Validate format
                                    └─ Error if invalid ─→ Response 422
                                    │
                                    ▼ (if valid)
                          Feature Extraction
                                    │
                          ┌─────────┼─────────┐
                          │         │         │
                          ▼         ▼         ▼
                       Linguistic Neural  Sentiment
                       Features   Score   Analysis
                                    │
                                    ▼
                          Score Aggregation
                                    │
                                    ▼
                          Generate Response
                                    │
                                    ├─ Prediction (REAL/FAKE)
                                    ├─ Confidence (0-100)
                                    ├─ Sentiment (pos/neg/neu)
                                    └─ Timestamp
                                    │
                                    ▼
                          Send JSON Response
                                    │
                                    ▼
                          Frontend Receives Data
                                    │
                                    ▼
                          Update UI Components
                                    │
                                    ▼
                          Display Results to User
```

## Container Architecture

```
Docker Compose Setup
═══════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────┐
│                    Docker Network                            │
│              (fakeguard-network, bridge)                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────┐        ┌─────────────────────┐    │
│  │   Frontend Service  │        │   Backend Service   │    │
│  ├─────────────────────┤        ├─────────────────────┤    │
│  │                     │        │                     │    │
│  │ Image: Node 18 →    │        │ Image: Python 3.9 →│    │
│  │ Build React App     │        │ FastAPI Server      │    │
│  │ Serve with Nginx    │        │                     │    │
│  │                     │        │ Ports:              │    │
│  │ Port Mapping:       │        │  - Container: 8000  │    │
│  │  3000:80            │        │  - Host: 8000       │    │
│  │                     │        │                     │    │
│  │ Health Check:       │        │ Health Check:       │    │
│  │  GET /              │        │  GET /api/health    │    │
│  │  30s interval       │        │  30s interval       │    │
│  │                     │        │                     │    │
│  │ Environment:        │        │ Environment:        │    │
│  │  REACT_APP_API_URL= │        │  LOG_LEVEL=INFO     │    │
│  │  http://backend:8000│        │  PYTHONUNBUFFERED=1 │    │
│  │                     │        │                     │    │
│  │ Dependency:         │        │ Dependency:         │    │
│  │  depends_on:backend │        │  (none)             │    │
│  │                     │        │                     │    │
│  └─────────────────────┘        └─────────────────────┘    │
│           │                              │                  │
│           └──────────────┬───────────────┘                  │
│                          │                                  │
│                  HTTP Communication                         │
│                   (Port 8000 on)                            │
│                   fakeguard-network                         │
│                                                             │
└──────────────────────────────────────────────────────────────┘

Host Machine
════════════════════════════════════════════════════════════════
  Port 3000  ──→  Container Frontend Port 80
  Port 8000  ──→  Container Backend Port 8000
```

## Component Architecture

```
Frontend Components Hierarchy
══════════════════════════════════════════════════════════════

App.js (Main)
 │
 ├─ Router (React Router v6)
 │  │
 │  ├─ Navigation (Global)
 │  │  ├─ Logo
 │  │  ├─ Menu Links (9 pages)
 │  │  ├─ Hamburger Menu (mobile)
 │  │  └─ Dashboard CTA
 │  │
 │  ├─ Page Components
 │  │  ├─ HomePage
 │  │  │  ├─ Hero Section
 │  │  │  ├─ Problem Statement
 │  │  │  ├─ Benefit Cards (6)
 │  │  │  ├─ How It Works
 │  │  │  └─ CTA Buttons
 │  │  │
 │  │  ├─ DetectionPage
 │  │  │  ├─ Tab System
 │  │  │  │  ├─ Text Input Tab
 │  │  │  │  └─ URL Input Tab (disabled)
 │  │  │  ├─ Form Component
 │  │  │  ├─ Loading Spinner
 │  │  │  ├─ Error Display
 │  │  │  ├─ Results Preview
 │  │  │  ├─ FAQ Section
 │  │  │  └─ Example Articles
 │  │  │
 │  │  ├─ ResultsPage
 │  │  │  ├─ Prediction Badge
 │  │  │  ├─ Confidence Circle
 │  │  │  ├─ Sentiment Display
 │  │  │  ├─ Analysis Factors
 │  │  │  ├─ Recommendations
 │  │  │  └─ Share & Retry CTA
 │  │  │
 │  │  ├─ ArchitecturePage
 │  │  │  ├─ System Diagram
 │  │  │  ├─ Component Breakdown
 │  │  │  ├─ Data Flow Steps
 │  │  │  ├─ Cloud Infrastructure
 │  │  │  ├─ Performance Specs
 │  │  │  └─ Deployment Stack
 │  │  │
 │  │  ├─ AITechniquesPage
 │  │  │  ├─ NLP Explanation
 │  │  │  ├─ Feature Extraction
 │  │  │  ├─ Classifier Cards
 │  │  │  ├─ Ensemble Voting
 │  │  │  ├─ Sentiment Analysis
 │  │  │  └─ Model Stats
 │  │  │
 │  │  ├─ DevOpsPage
 │  │  │  ├─ CI/CD Pipeline
 │  │  │  ├─ Docker Steps
 │  │  │  ├─ AWS Infrastructure
 │  │  │  ├─ Monitoring Setup
 │  │  │  ├─ Deployment Process
 │  │  │  └─ Environment Mgmt
 │  │  │
 │  │  ├─ MetricsPage
 │  │  │  ├─ Real-time Charts
 │  │  │  ├─ Performance Metrics
 │  │  │  ├─ Validation Results
 │  │  │  ├─ Inference Performance
 │  │  │  └─ Status Cards
 │  │  │
 │  │  ├─ DemoPage
 │  │  │  ├─ Demo Cards
 │  │  │  ├─ Deliverables List
 │  │  │  ├─ GitHub Links
 │  │  │  ├─ Video Placeholders
 │  │  │  ├─ Resources
 │  │  │  └─ Timeline
 │  │  │
 │  │  └─ DashboardPage
 │  │     ├─ System Overview
 │  │     ├─ Health Cards
 │  │     ├─ Metrics Charts
 │  │     ├─ Recent Analyses
 │  │     ├─ Model Info
 │  │     └─ Admin Actions
 │  │
 │  └─ Footer (Global)
 │     ├─ Page Links
 │     ├─ Social Links
 │     ├─ Copyright
 │     └─ Version Info
 │
 └─ App.css (Global Styles)
    ├─ CSS Variables
    ├─ Grid System
    ├─ Responsive Design
    ├─ Dark Theme
    ├─ Animations
    └─ Component Styles
```

## API Endpoint Specifications

```
┌──────────────────────────────────────────────────────────────┐
│                   API Endpoints                              │
└──────────────────────────────────────────────────────────────┘

1. GET / (Root)
   ├─ Purpose: API Information
   ├─ Parameters: None
   ├─ Response: {title, version, description}
   └─ Status: 200 OK

2. GET /api/health (Health Check)
   ├─ Purpose: Service Health & Uptime
   ├─ Parameters: None
   ├─ Response: {status, timestamp, model_version, uptime_seconds}
   └─ Status: 200 OK

3. POST /api/predict (Main Endpoint) ⭐
   ├─ Purpose: Fake News Detection
   ├─ Parameters:
   │  └─ text (string): 20-5000 chars
   ├─ Validation:
   │  ├─ Text length check
   │  ├─ Type validation
   │  └─ Format check
   ├─ Process:
   │  ├─ Feature extraction
   │  ├─ Pattern matching
   │  └─ Confidence scoring
   ├─ Response:
   │  ├─ prediction (string): "REAL" or "FAKE"
   │  ├─ confidence (string): "50"-"99"
   │  ├─ sentiment (string): "positive"/"negative"/"neutral"
   │  └─ timestamp (string): ISO 8601
   └─ Status: 200 OK or 422 Validation Error

4. GET /api/stats (Statistics)
   ├─ Purpose: System Performance Metrics
   ├─ Parameters: None
   ├─ Response:
   │  ├─ total_predictions (int)
   │  ├─ total_errors (int)
   │  ├─ model_version (string)
   │  ├─ uptime_seconds (int)
   │  ├─ accuracy (string): percentage
   │  └─ avg_latency_ms (string)
   └─ Status: 200 OK

5. GET /api/model-info (Model Details)
   ├─ Purpose: ML Model Information
   ├─ Parameters: None
   ├─ Response:
   │  ├─ model_name (string)
   │  ├─ version (string)
   │  ├─ accuracy (string): 0-1
   │  ├─ precision (string): 0-1
   │  ├─ recall (string): 0-1
   │  ├─ f1_score (string): 0-1
   │  ├─ roc_auc (string): 0-1
   │  ├─ training_date (string)
   │  ├─ training_samples (int)
   │  └─ features_count (int)
   └─ Status: 200 OK
```

## CI/CD Pipeline Architecture

```
GitHub Push Event
      │
      ▼
┌──────────────────────────────────────────┐
│   GitHub Actions Workflow                │
│   (.github/workflows/cicd.yml)           │
└──────────────────────────────────────────┘
      │
      ├─────┬─────┬──────┬────────┬─────┐
      │     │     │      │        │     │
      ▼     ▼     ▼      ▼        ▼     ▼
   Code  Backend Frontend Docker Security
   Quality Tests  Tests   Build  Scan
   
   │     │     │      │        │     │
   └─────┴─────┴──────┴────────┴─────┘
      │
      ▼ (all pass)
   ✓ Notify
      │
      ▼ (if main branch)
   ✓ Deploy to AWS (optional)
```

## Database Architecture (Future)

```
Currently: No persistent storage (stateless API)

Future Architecture:
┌────────────────────────────────┐
│    Application Layer           │
│   (FastAPI + Backend Service)  │
└────────────────────────────────┘
             │
             ▼
┌────────────────────────────────┐
│    Database Layer              │
├────────────────────────────────┤
│  PostgreSQL (relational)       │
│  ├─ Users table                │
│  ├─ Predictions table          │
│  ├─ Feedback table             │
│  └─ Analytics table            │
│                                │
│  Redis (cache)                 │
│  ├─ Session cache              │
│  ├─ Prediction cache           │
│  └─ Rate limit counters        │
└────────────────────────────────┘
```

## Deployment Architecture

```
AWS Multi-AZ Deployment
═════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    Internet                                  │
└─────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│              CloudFront (CDN)                               │
│         [Edge Distribution]                                 │
└─────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│        Application Load Balancer (ALB)                      │
│        [Health Check, SSL/TLS Termination]                 │
└─────────────────────────────────────────────────────────────┘
             │
        ┌────┴────┐
        │          │
        ▼          ▼
   ┌────────┐  ┌────────┐
   │  AZ-1  │  │  AZ-2  │
   ├────────┤  ├────────┤
   │ Frontend│  │Frontend│  Auto Scaling Group
   │Container│  │Container│ (Min: 2, Max: 10)
   │         │  │         │
   │ Backend │  │ Backend │
   │Container│  │Container│
   │         │  │         │
   └────────┘  └────────┘
       │            │
       └──────┬─────┘
              ▼
       ┌─────────────┐
       │   CloudWatch│  Monitoring & Logging
       └─────────────┘
```

## Security Architecture

```
Security Layers
═════════════════════════════════════════════════════════════

1. Network Security
   ├─ HTTPS/TLS (in production)
   ├─ VPC with public/private subnets
   ├─ Security groups (firewall)
   └─ NACLs (network ACLs)

2. Application Security
   ├─ Input validation (Pydantic)
   ├─ XSS prevention (React auto-escape)
   ├─ CSRF protection (tokens)
   ├─ Rate limiting
   └─ Request/response logging

3. Infrastructure Security
   ├─ Secrets management (AWS Secrets Manager)
   ├─ IAM roles & policies
   ├─ EC2 security groups
   ├─ Regular patching
   └─ Security scanning (Trivy)

4. Data Security
   ├─ No sensitive data in logs
   ├─ No credentials in code
   ├─ Encryption in transit
   ├─ Encryption at rest (RDS)
   └─ Regular backups
```

---

This architecture supports:
- ✅ High availability
- ✅ Horizontal scaling
- ✅ Rapid deployments
- ✅ Easy monitoring
- ✅ Strong security
- ✅ Cost optimization
