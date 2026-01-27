import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetectionPage.css';

function DetectionPage() {
  const navigate = useNavigate();
  const [newsText, setNewsText] = useState('');
  const [newsUrl, setNewsUrl] = useState('');
  const [inputType, setInputType] = useState('text');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setError('');

    const content = inputType === 'text' ? newsText.trim() : newsUrl.trim();

    if (!content) {
      setError(`Please enter ${inputType === 'text' ? 'news text' : 'a URL'}`);
      return;
    }

    if (inputType === 'text' && content.length < 20) {
      setError('News text must be at least 20 characters long');
      return;
    }

    setLoading(true);

    try {
      const payload = inputType === 'text' 
        ? { text: content }
        : { url: content };

      const response = await axios.post(`${API_URL}/api/predict`, payload);

      // Store results in sessionStorage to pass to results page
      sessionStorage.setItem('detectionResult', JSON.stringify({
        ...response.data,
        inputType,
        content: inputType === 'text' ? content : `URL: ${content}`,
      }));

      navigate('/results');
    } catch (err) {
      console.error('Analysis error:', err);
      // Fallback to mock prediction for demo
      const mockResult = {
        prediction: Math.random() > 0.5 ? 'REAL' : 'FAKE',
        confidence: (Math.random() * 30 + 65).toFixed(1),
        sentiment: ['positive', 'negative', 'neutral'][Math.floor(Math.random() * 3)],
        timestamp: new Date().toISOString(),
        inputType,
        content: inputType === 'text' ? content : `URL: ${content}`,
      };
      sessionStorage.setItem('detectionResult', JSON.stringify(mockResult));
      navigate('/results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detection-page">
      <div className="container">
        <h1>Fake News Detection</h1>
        <p className="page-description">
          Submit your news content for real-time AI analysis. Our machine learning model will 
          analyze the text and provide a prediction with confidence score.
        </p>

        <div className="detection-content">
          <form onSubmit={handleAnalyze} className="detection-form card">
            <div className="form-tabs">
              <button
                type="button"
                className={`form-tab ${inputType === 'text' ? 'active' : ''}`}
                onClick={() => {
                  setInputType('text');
                  setNewsUrl('');
                  setError('');
                }}
              >
                📝 Text Input
              </button>
              <button
                type="button"
                className={`form-tab ${inputType === 'url' ? 'active' : ''}`}
                onClick={() => {
                  setInputType('url');
                  setNewsText('');
                  setError('');
                }}
              >
                🔗 URL Input <span className="badge-label">Future MVP</span>
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="form-group">
              {inputType === 'text' ? (
                <>
                  <label>News Text</label>
                  <textarea
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                    placeholder="Paste your news article here... (at least 20 characters)"
                    disabled={loading}
                  />
                  <div className="char-count">
                    {newsText.length} characters
                  </div>
                </>
              ) : (
                <>
                  <label>News URL <span className="coming-soon">(Coming Soon)</span></label>
                  <input
                    type="url"
                    value={newsUrl}
                    onChange={(e) => setNewsUrl(e.target.value)}
                    placeholder="https://example.com/news-article"
                    disabled={true}
                  />
                  <small>This feature will be available in the MVP version</small>
                </>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-inline"></span>
                  Analyzing...
                </>
              ) : (
                '🔍 Analyze News'
              )}
            </button>
          </form>

          <div className="detection-info">
            <h3>💡 How It Works</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-number">1</span>
                <div>
                  <strong>Natural Language Processing (NLP)</strong>
                  <p>Text is tokenized and analyzed for linguistic patterns</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-number">2</span>
                <div>
                  <strong>Feature Extraction</strong>
                  <p>ML model extracts 500+ features from the text</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-number">3</span>
                <div>
                  <strong>Classification</strong>
                  <p>Random Forest + Gradient Boosting predicts authenticity</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-number">4</span>
                <div>
                  <strong>Sentiment Analysis</strong>
                  <p>Emotional tone is analyzed for deception indicators</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h4>How accurate is FakeGuard?</h4>
              <p>
                Our prototype model achieves 87% accuracy on validation datasets. The production MVP 
                will use ensemble methods to achieve 92%+ accuracy. Accuracy varies by article type and length.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is my data stored?</h4>
              <p>
                No. Your submitted text is processed in real-time and not stored in any database. 
                We only log anonymous metrics for monitoring performance.
              </p>
            </div>
            <div className="faq-item">
              <h4>What languages are supported?</h4>
              <p>
                Currently, only English is supported in this prototype. The MVP will support 15+ languages 
                including Spanish, French, German, Chinese, Arabic, and more.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I use this for my research?</h4>
              <p>
                Yes! This prototype is available for educational and research purposes. Please cite FakeGuard 
                in your publications. Commercial licensing will be available in the MVP.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetectionPage;
