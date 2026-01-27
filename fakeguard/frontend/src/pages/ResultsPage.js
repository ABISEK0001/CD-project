import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedResult = sessionStorage.getItem('detectionResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
      setLoading(false);
    } else {
      navigate('/detect');
    }
  }, [navigate]);

  if (loading) {
    return <div className="loading"><div className="spinner"></div></div>;
  }

  if (!result) {
    return null;
  }

  const isPredictionReal = result.prediction === 'REAL';
  const confidencePercent = parseFloat(result.confidence);
  const sentimentLabel = result.sentiment?.toUpperCase() || 'NEUTRAL';

  return (
    <div className="results-page">
      <div className="container">
        <h1>Analysis Results</h1>

        <div className="results-grid">
          {/* Main Prediction Card */}
          <div className={`prediction-card ${isPredictionReal ? 'real' : 'fake'}`}>
            <div className="prediction-icon">
              {isPredictionReal ? '✓' : '✗'}
            </div>
            <div className="prediction-text">
              <h2 className="prediction-label">{result.prediction}</h2>
              <p className="prediction-description">
                {isPredictionReal 
                  ? 'This content appears to be AUTHENTIC based on linguistic analysis'
                  : 'This content shows signs of MISINFORMATION based on linguistic analysis'
                }
              </p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="card metric-card">
            <div className="metric-label">Confidence Score</div>
            <div className="confidence-container">
              <svg className="confidence-circle" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="circle-bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="circle-progress"
                  style={{
                    strokeDasharray: `${confidencePercent * 2.827} 282.7`,
                  }}
                />
              </svg>
              <div className="confidence-value">
                <span className="percentage">{result.confidence}%</span>
                <small>confidence</small>
              </div>
            </div>
            <p className="metric-description">
              {confidencePercent >= 80 
                ? 'High confidence prediction' 
                : confidencePercent >= 60 
                ? 'Moderate confidence prediction' 
                : 'Low confidence - recommendation: verify independently'}
            </p>
          </div>

          {/* Sentiment Analysis */}
          <div className="card metric-card">
            <div className="metric-label">Sentiment Analysis</div>
            <div className="sentiment-badge" data-sentiment={sentimentLabel.toLowerCase()}>
              {sentimentLabel}
            </div>
            <div className="sentiment-info">
              {sentimentLabel === 'POSITIVE' && (
                <p>📈 High emotional charge detected - common in fake news</p>
              )}
              {sentimentLabel === 'NEGATIVE' && (
                <p>📉 Negative tone detected - may indicate sensationalism</p>
              )}
              {sentimentLabel === 'NEUTRAL' && (
                <p>➡️ Balanced tone - indicator of factual reporting</p>
              )}
            </div>
          </div>

          {/* Timestamp */}
          <div className="card metric-card">
            <div className="metric-label">Analysis Timestamp</div>
            <div className="timestamp">
              {new Date(result.timestamp).toLocaleString()}
            </div>
            <small>UTC Time</small>
          </div>
        </div>

        {/* Content Summary */}
        <div className="content-summary card">
          <h3>📄 Analyzed Content</h3>
          <div className="content-preview">
            {result.content.substring(0, 200)}...
          </div>
          <div className="content-length">
            {result.inputType === 'text' && (
              <span>{result.content.length} characters analyzed</span>
            )}
            {result.inputType === 'url' && (
              <span>URL analysis</span>
            )}
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="analysis-details card">
          <h3>🔬 Detailed Analysis Factors</h3>
          <div className="factors-grid">
            <div className="factor">
              <span className="factor-icon">📊</span>
              <h4>Linguistic Patterns</h4>
              <p>Text analyzed for word frequency, sentiment, and structural anomalies common in fake news</p>
            </div>
            <div className="factor">
              <span className="factor-icon">🔤</span>
              <h4>Vocabulary Analysis</h4>
              <p>Checked for excessive capitalization, unusual punctuation, and sensationalist language</p>
            </div>
            <div className="factor">
              <span className="factor-icon">📈</span>
              <h4>Emotional Tone</h4>
              <p>Analyzed for manipulative emotional appeals and propaganda indicators</p>
            </div>
            <div className="factor">
              <span className="factor-icon">⚙️</span>
              <h4>Feature Extraction</h4>
              <p>500+ ML features extracted and analyzed by ensemble classifier models</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className={`recommendations card ${isPredictionReal ? 'info' : 'warning'}`}>
          <h3>💡 Recommendations</h3>
          {isPredictionReal ? (
            <ul>
              <li>✓ Content appears reliable based on linguistic analysis</li>
              <li>✓ Safe to share with confidence</li>
              <li>⚠️ Always verify critical facts with official sources</li>
              <li>⚠️ Consider the source credibility independently</li>
            </ul>
          ) : (
            <ul>
              <li>⚠️ Exercise caution before sharing this content</li>
              <li>⚠️ Verify claims with authoritative sources</li>
              <li>⚠️ Check publication date and author credentials</li>
              <li>⚠️ Cross-reference facts with established news outlets</li>
            </ul>
          )}
        </div>

        {/* Call to Action */}
        <div className="actions">
          <Link to="/detect" className="btn btn-primary">Analyze Another Article</Link>
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>

        {/* Prototype Info */}
        <div className="alert alert-info">
          <strong>💬 About These Results:</strong> This analysis is based on a prototype ML model trained on 
          linguistic patterns. The production MVP will include real-time fact-checking, source verification, 
          and cross-reference validation for significantly improved accuracy.
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
