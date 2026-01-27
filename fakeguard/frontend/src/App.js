import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage';
import ResultsPage from './pages/ResultsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import AITechniquesPage from './pages/AITechniquesPage';
import DevOpsPage from './pages/DevOpsPage';
import MetricsPage from './pages/MetricsPage';
import DemoPage from './pages/DemoPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detect" element={<DetectionPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/ai-techniques" element={<AITechniquesPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/metrics" element={<MetricsPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
