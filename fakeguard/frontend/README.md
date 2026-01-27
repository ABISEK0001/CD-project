# FakeGuard Frontend

Modern, responsive React SPA for fake news detection platform.

## 📋 Overview

The FakeGuard Frontend is a React 18 single-page application with 9 comprehensive pages showcasing an AI-powered fake news detection platform. Built for modern browsers with responsive design optimized for mobile, tablet, and desktop.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Styling**: CSS3 with custom properties
- **Charts**: Chart.js + React-ChartJS-2
- **Build**: Create React App

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/              # Page components
│   │   ├── HomePage.js
│   │   ├── DetectionPage.js
│   │   ├── ResultsPage.js
│   │   ├── ArchitecturePage.js
│   │   ├── AITechniquesPage.js
│   │   ├── DevOpsPage.js
│   │   ├── MetricsPage.js
│   │   ├── DemoPage.js
│   │   └── DashboardPage.js
│   ├── components/         # Reusable components
│   │   ├── Navigation.js
│   │   └── Footer.js
│   ├── App.js             # Main app with routing
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
├── Dockerfile
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Docker (optional)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Development server runs on `http://localhost:3000`

### Available Commands

```bash
npm start          # Start development server (port 3000)
npm build          # Create production build
npm test           # Run tests
npm eject          # Expose CRA configuration (one-way)
```

### Using Docker

```bash
# Build image
docker build -t fakeguard-frontend:1.0.0 .

# Run container (port 3000)
docker run -p 3000:80 fakeguard-frontend:1.0.0
```

### With Docker Compose

```bash
cd ..
docker-compose up frontend
```

## 📄 Pages & Features

### 1. **Home Page** (`/`)
- Hero section with main CTA
- Problem statement with statistics
- Solution overview
- Key benefits (6 benefit cards)
- How it works (4-step process)
- Secondary CTAs
- Design: Dark theme with cyan accents

### 2. **Detection Page** (`/detect`)
- Text input tab (fully functional)
- URL input tab (future MVP badge)
- Form validation (20-5000 characters)
- Confidence indicator
- FAQ section (4 questions)
- Example articles
- Loading states and error handling

### 3. **Results Page** (`/results`)
- Prediction badge (REAL/FAKE)
- Confidence circle with percentage
- Sentiment analysis breakdown
- Content preview
- Detailed analysis factors
- Recommendations
- Share & analyze another CTA
- Data retrieved from sessionStorage

### 4. **Architecture Page** (`/architecture`)
- System architecture diagram
- Component descriptions
- 8-step data flow explanation
- Cloud infrastructure details
- Performance specifications
- Security measures
- Deployment stack visualization

### 5. **AI Techniques Page** (`/ai-techniques`)
- NLP explanation
  - Tokenization
  - Lemmatization
  - TF-IDF vectorization
- Feature extraction (500+ features)
  - Linguistic features
  - Statistical features
  - Semantic features
  - Metadata features
- ML classifiers
  - Random Forest
  - XGBoost
  - Neural Networks
  - SVM
- Ensemble voting strategy
- Sentiment analysis
- Model performance metrics

### 6. **Cloud & DevOps Page** (`/devops`)
- GitHub Actions CI/CD pipeline
- Docker containerization
- AWS infrastructure setup
- Multi-cloud deployment options
- Monitoring and logging
- Blue-green deployment process
- Environment management
- Security scanning

### 7. **Metrics Page** (`/metrics`)
- Real-time system metrics (updates every 5 seconds)
- Performance dashboard
  - Model accuracy: 87.3%
  - Avg latency: 342ms
  - P99 latency: 892ms
  - Success rate: 98.7%
  - System uptime: 99.98%
- Validation results
  - Per-category performance
  - Confusion matrix
  - ROC-AUC curve
- Inference performance
  - Latency distribution
  - Throughput metrics

### 8. **Demo & Deliverables Page** (`/demo`)
- Live demo cards
- Project deliverables checklist
- GitHub repository integration
- Demo video placeholders
- Resources and documentation
- Prototype vs MVP timeline
- Project statistics

### 9. **Admin Dashboard** (`/dashboard`)
- Real-time system monitoring
- System overview cards
  - Total analyses
  - Success rate
  - Avg latency
  - Uptime percentage
  - Active users
  - Model accuracy
- Recent analyses table
- ML model information
- Performance statistics
- System status monitoring
- Admin action buttons

## 🎨 Design System

### Colors
```css
--primary-color: #0066cc;
--secondary-color: #00d4ff;
--dark-bg: #0a0e27;
--card-bg: #151b2f;
--accent: #00d4ff;
--text-primary: #ffffff;
--text-secondary: #a0aec0;
--success: #22c55e;
--warning: #f59e0b;
--danger: #ef4444;
```

### Typography
- **Headings**: System font stack (Segoe UI, Roboto, etc.)
- **Body**: System font stack
- **Font Sizes**: 14px to 48px responsive scale

### Responsive Breakpoints
```css
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

## 📡 API Integration

### API Configuration

Set the backend API URL in `.env`:

```env
REACT_APP_API_URL=http://localhost:8000
```

### API Endpoints Used

```javascript
// Health check
GET /api/health

// Make prediction
POST /api/predict
{
  "text": "News article text..."
}

// Get statistics
GET /api/stats

// Get model information
GET /api/model-info
```

### API Error Handling

The frontend includes:
- ✓ Try-catch blocks for all API calls
- ✓ Fallback mock predictions
- ✓ User-friendly error messages
- ✓ Loading states during requests
- ✓ Timeout handling

### Axios Configuration

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});
```

## 💾 State Management

### Session Storage
Used for passing data between pages:
```javascript
// Store prediction result
sessionStorage.setItem('predictionResult', JSON.stringify(result));

// Retrieve on results page
const result = JSON.parse(sessionStorage.getItem('predictionResult'));
```

### Component State
- `useState` hooks for local component state
- `useEffect` hooks for side effects
- Real-time metric updates (5-second intervals)

## 🧪 Testing

### Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

### Test Files
- `App.test.js` - Router and main app tests
- `pages/*.test.js` - Page component tests (to be created)
- `components/*.test.js` - Component tests (to be created)

## 🚀 Production Build

### Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder:
- ✓ Minified JavaScript
- ✓ Optimized CSS
- ✓ Source maps
- ✓ Tree shaking

### Performance Optimizations

- Lazy loading with `React.lazy()`
- Code splitting by route
- Image optimization
- CSS minification
- Gzip compression
- Browser caching

### Serve Production Build Locally

```bash
# Install serve package
npm install -g serve

# Serve production build
serve -s build -l 3000
```

## 🌐 Deployment

### Docker Deployment

```bash
# Build production image
docker build -t fakeguard-frontend:1.0.0 .

# Run container
docker run -p 3000:80 \
  -e REACT_APP_API_URL=https://api.fakeguard.ai \
  fakeguard-frontend:1.0.0
```

### Environment Configuration for Deployment

```bash
# Production (external API)
REACT_APP_API_URL=https://api.production.com

# Staging
REACT_APP_API_URL=https://api.staging.com
```

### Deployment Checklist

- [ ] Build passes without errors
- [ ] All tests pass
- [ ] Bundle size is optimized
- [ ] API URL correctly configured
- [ ] CORS enabled on backend
- [ ] SSL/TLS certificate valid
- [ ] Performance testing completed
- [ ] Accessibility audit passed

## 📊 Performance Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Page Load | < 2s | ✓ |
| First Contentful Paint | < 1.5s | ✓ |
| Largest Contentful Paint | < 2.5s | ✓ |
| Cumulative Layout Shift | < 0.1 | ✓ |
| Time to Interactive | < 3s | ✓ |
| Bundle Size | < 200KB | ✓ |

## ♿ Accessibility

- ✓ Semantic HTML elements
- ✓ ARIA labels and roles
- ✓ Color contrast compliance (WCAG AA)
- ✓ Keyboard navigation support
- ✓ Focus indicators
- ✓ Form label associations
- ✓ Alt text for images

## 🔐 Security

- ✓ Input validation
- ✓ XSS protection (React auto-escaping)
- ✓ CSRF protection ready
- ✓ No sensitive data in localStorage (using sessionStorage)
- ✓ HTTPS/TLS in production
- ✓ Content Security Policy ready
- ✓ Regular dependency updates

## 🛠️ Development Tools

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "chrisdias.vscode-opennewwindowinsamewindow",
    "msjsdiag.debugger-for-chrome"
  ]
}
```

### Debug in Chrome

1. Start dev server: `npm start`
2. Open DevTools (F12)
3. Set breakpoints in Sources tab
4. React DevTools extension recommended

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Create React App Guide](https://create-react-app.dev)
- [Axios Documentation](https://axios-http.com)
- [Web Accessibility Guidelines](https://www.w3.org/WAI)

## 🐛 Troubleshooting

### Issue: API calls fail
- Check `REACT_APP_API_URL` environment variable
- Verify backend is running on correct port
- Check browser console for CORS errors

### Issue: Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild CSS: `npm run build`
- Check CSS class names in components

### Issue: Tests failing
- Delete `node_modules` and reinstall: `npm install`
- Clear Jest cache: `npm test -- --clearCache`
- Check test file syntax

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Make changes and commit: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📝 License

MIT License - See LICENSE file for details

---

**Note**: This frontend is a prototype. Some features (like URL detection) are marked as "Future MVP" and disabled.
