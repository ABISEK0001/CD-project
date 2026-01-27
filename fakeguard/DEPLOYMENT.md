# FakeGuard - Development & Deployment Guide

## Local Development Setup

### Prerequisites
- Docker & Docker Compose installed
- Node.js 18+ for frontend development
- Python 3.9+ for backend development
- Git configured

### Quick Start with Docker Compose

```bash
# Clone and navigate to project
git clone <repo-url>
cd fakeguard

# Start all services
docker-compose up -d

# Check services are running
docker-compose ps

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop services
docker-compose down
```

### URLs After Starting
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- API Redoc: http://localhost:8000/redoc

## Frontend Development

### Setup
```bash
cd frontend
npm install
npm start
```

### Available Commands
```bash
npm start          # Development server
npm build          # Production build
npm test           # Run tests
npm eject          # Expose configuration (one-way)
```

### Project Structure
```
src/
├── pages/          # Page components
│   ├── HomePage.js
│   ├── DetectionPage.js
│   ├── ResultsPage.js
│   ├── ArchitecturePage.js
│   ├── AITechniquesPage.js
│   ├── DevOpsPage.js
│   ├── MetricsPage.js
│   ├── DemoPage.js
│   └── DashboardPage.js
├── components/     # Reusable components
│   ├── Navigation.js
│   └── Footer.js
├── App.js          # Main app component
└── App.css         # Global styles
```

## Backend Development

### Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Project Structure
```
backend/
├── main.py         # FastAPI application
├── requirements.txt
├── Dockerfile
├── test_api.py     # Tests
└── models/         # ML models (future)
```

## Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

### Backend (.env)
```
PYTHONUNBUFFERED=1
LOG_LEVEL=INFO
MODEL_PATH=./models/
```

## Testing

### Backend Tests
```bash
cd backend
pip install pytest pytest-cov
pytest -v --cov
```

### Frontend Tests
```bash
cd frontend
npm test -- --coverage
```

## Code Quality

### Python Linting
```bash
pip install flake8 pylint
flake8 backend/
pylint backend/main.py
```

### JavaScript/React Linting
```bash
cd frontend
npm run lint
```

## Docker Commands

### Build Images
```bash
# Frontend
docker build -t fakeguard-frontend:1.0.0 ./frontend

# Backend
docker build -t fakeguard-backend:1.0.0 ./backend
```

### Run Individual Services
```bash
# Backend
docker run -p 8000:8000 fakeguard-backend:1.0.0

# Frontend (requires backend)
docker run -p 3000:80 -e REACT_APP_API_URL=http://backend:8000 fakeguard-frontend:1.0.0
```

## CI/CD Pipeline

### GitHub Actions Workflow
The `.github/workflows/cicd.yml` file defines:
1. Code quality checks (linting)
2. Unit tests (backend & frontend)
3. Build Docker images
4. Security scanning (Trivy)
5. Optional AWS deployment

### Running Locally
```bash
# Install act to run GitHub Actions locally
# https://github.com/nektos/act

act push -j code-quality
act push -j backend-tests
act push -j build
```

## AWS Deployment

### Prerequisites
- AWS account with EC2, ECR, CloudWatch access
- GitHub repository secrets configured:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`

### Deployment Steps
1. Configure GitHub Secrets with AWS credentials
2. Uncomment deployment job in `.github/workflows/cicd.yml`
3. Push to main branch
4. GitHub Actions automatically builds and deploys

### AWS Infrastructure
- **Compute**: EC2 Auto Scaling Group (t3.medium)
- **Container Registry**: Amazon ECR
- **Load Balancer**: Application Load Balancer
- **Monitoring**: CloudWatch
- **Logging**: CloudWatch Logs

## Monitoring & Logging

### Local Monitoring
```bash
# Backend logs
docker-compose logs backend -f

# Frontend logs
docker-compose logs frontend -f

# API health
curl http://localhost:8000/api/health

# API stats
curl http://localhost:8000/api/stats
```

### Production Monitoring
- CloudWatch metrics and dashboards
- Application Performance Monitoring (APM)
- Log aggregation and analysis

## Performance Optimization

### Frontend
- Code splitting with React.lazy()
- Image optimization
- CSS minification
- Gzip compression

### Backend
- Connection pooling
- Caching strategies
- Async/await for I/O operations
- Model serving optimization

## Troubleshooting

### Docker Issues
```bash
# Clear all containers
docker-compose down -v

# Rebuild images
docker-compose build --no-cache

# Check logs
docker-compose logs --tail=100 backend
```

### Frontend Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear cache and rebuild
npm cache clean --force
npm run build
```

### Backend Issues
```bash
# Clear cache and reinstall
rm -rf venv __pycache__
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Test API
curl -X GET http://localhost:8000/api/health
```

## Security Checklist

- [ ] Input validation enabled
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] HTTPS/TLS enabled (production)
- [ ] Secrets not committed to repo
- [ ] Dependencies regularly updated
- [ ] Security scanning in CI/CD
- [ ] Error handling doesn't leak info

## Production Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] Monitoring and logging enabled
- [ ] Backup and disaster recovery plan
- [ ] Load testing completed
- [ ] Security audit completed

## Additional Resources

- [React Documentation](https://react.dev)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [AWS Documentation](https://docs.aws.amazon.com)
- [GitHub Actions](https://github.com/features/actions)

## Support

For issues or questions:
1. Check existing GitHub Issues
2. Review documentation
3. Create new Issue with detailed description
4. Contact team: contact@fakeguard.ai
