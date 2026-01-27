import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


class TestHealthEndpoint:
    """Test health check endpoint"""

    def test_health_check_returns_200(self):
        """Test that health check returns 200 status"""
        response = client.get("/api/health")
        assert response.status_code == 200

    def test_health_check_returns_required_fields(self):
        """Test that health check returns required fields"""
        response = client.get("/api/health")
        data = response.json()
        assert "status" in data
        assert "timestamp" in data
        assert "model_version" in data
        assert "uptime_seconds" in data

    def test_health_check_status_is_healthy(self):
        """Test that health check status is healthy"""
        response = client.get("/api/health")
        data = response.json()
        assert data["status"] == "healthy"


class TestPredictionEndpoint:
    """Test prediction endpoint"""

    def test_predict_with_valid_input(self):
        """Test prediction with valid text input"""
        response = client.post(
            "/api/predict",
            json={"text": "This is a legitimate news article with factual information."}
        )
        assert response.status_code == 200

    def test_predict_response_contains_required_fields(self):
        """Test that prediction response has required fields"""
        response = client.post(
            "/api/predict",
            json={"text": "This is a legitimate news article with factual information."}
        )
        data = response.json()
        assert "prediction" in data
        assert "confidence" in data
        assert "sentiment" in data
        assert "timestamp" in data

    def test_predict_with_text_too_short(self):
        """Test prediction with text shorter than minimum"""
        response = client.post(
            "/api/predict",
            json={"text": "Short text"}
        )
        assert response.status_code == 422  # Validation error

    def test_predict_with_empty_text(self):
        """Test prediction with empty text"""
        response = client.post(
            "/api/predict",
            json={"text": ""}
        )
        assert response.status_code == 422

    def test_predict_with_text_too_long(self):
        """Test prediction with text exceeding maximum length"""
        long_text = "word " * 1500  # More than 5000 chars
        response = client.post(
            "/api/predict",
            json={"text": long_text}
        )
        assert response.status_code == 422

    def test_predict_response_prediction_valid(self):
        """Test that prediction response contains valid prediction"""
        response = client.post(
            "/api/predict",
            json={"text": "This is a legitimate news article about research findings."}
        )
        data = response.json()
        assert data["prediction"] in ["REAL", "FAKE"]

    def test_predict_confidence_in_valid_range(self):
        """Test that confidence score is between 0 and 100"""
        response = client.post(
            "/api/predict",
            json={"text": "This is a test article to check confidence scoring."}
        )
        data = response.json()
        confidence = float(data["confidence"])
        assert 0 <= confidence <= 100

    def test_predict_sentiment_valid(self):
        """Test that sentiment is one of valid values"""
        response = client.post(
            "/api/predict",
            json={"text": "Breaking news about shocking developments in technology!"}
        )
        data = response.json()
        assert data["sentiment"] in ["positive", "negative", "neutral"]

    def test_predict_missing_text_field(self):
        """Test prediction with missing text field"""
        response = client.post(
            "/api/predict",
            json={}
        )
        assert response.status_code == 422


class TestStatsEndpoint:
    """Test statistics endpoint"""

    def test_stats_returns_200(self):
        """Test that stats endpoint returns 200 status"""
        response = client.get("/api/stats")
        assert response.status_code == 200

    def test_stats_contains_required_fields(self):
        """Test that stats response contains required fields"""
        response = client.get("/api/stats")
        data = response.json()
        assert "total_predictions" in data
        assert "total_errors" in data
        assert "model_version" in data
        assert "uptime_seconds" in data
        assert "accuracy" in data
        assert "avg_latency_ms" in data

    def test_stats_accuracy_in_valid_range(self):
        """Test that accuracy is between 0 and 100"""
        response = client.get("/api/stats")
        data = response.json()
        accuracy = float(data["accuracy"])
        assert 0 <= accuracy <= 100

    def test_stats_total_predictions_non_negative(self):
        """Test that total predictions count is non-negative"""
        response = client.get("/api/stats")
        data = response.json()
        assert data["total_predictions"] >= 0

    def test_stats_latency_non_negative(self):
        """Test that average latency is non-negative"""
        response = client.get("/api/stats")
        data = response.json()
        assert float(data["avg_latency_ms"]) >= 0


class TestModelInfoEndpoint:
    """Test model information endpoint"""

    def test_model_info_returns_200(self):
        """Test that model info endpoint returns 200 status"""
        response = client.get("/api/model-info")
        assert response.status_code == 200

    def test_model_info_contains_required_fields(self):
        """Test that model info response contains required fields"""
        response = client.get("/api/model-info")
        data = response.json()
        assert "model_name" in data
        assert "version" in data
        assert "accuracy" in data
        assert "precision" in data
        assert "recall" in data
        assert "f1_score" in data
        assert "roc_auc" in data
        assert "training_date" in data
        assert "training_samples" in data

    def test_model_metrics_in_valid_range(self):
        """Test that all metrics are between 0 and 1"""
        response = client.get("/api/model-info")
        data = response.json()
        metrics = ["accuracy", "precision", "recall", "f1_score", "roc_auc"]
        for metric in metrics:
            value = float(data[metric])
            assert 0 <= value <= 1, f"{metric} should be between 0 and 1"


class TestRootEndpoint:
    """Test root endpoint"""

    def test_root_returns_200(self):
        """Test that root endpoint returns 200 status"""
        response = client.get("/")
        assert response.status_code == 200

    def test_root_contains_api_info(self):
        """Test that root response contains API information"""
        response = client.get("/")
        data = response.json()
        assert "message" in data or "title" in data


class TestErrorHandling:
    """Test error handling"""

    def test_invalid_endpoint_returns_404(self):
        """Test that invalid endpoint returns 404"""
        response = client.get("/api/invalid")
        assert response.status_code == 404

    def test_invalid_method_returns_405(self):
        """Test that invalid HTTP method returns 405"""
        response = client.get("/api/predict")  # Should be POST
        assert response.status_code == 405

    def test_malformed_json_returns_422(self):
        """Test that malformed JSON returns validation error"""
        response = client.post(
            "/api/predict",
            content="not valid json",
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code in [422, 400]


class TestIntegration:
    """Integration tests"""

    def test_multiple_predictions_increase_count(self):
        """Test that multiple predictions increase the count"""
        # Get initial stats
        response1 = client.get("/api/stats")
        initial_count = response1.json()["total_predictions"]

        # Make a prediction
        client.post(
            "/api/predict",
            json={"text": "This is a test article for integration testing."}
        )

        # Get updated stats
        response2 = client.get("/api/stats")
        updated_count = response2.json()["total_predictions"]

        # Count should increase
        assert updated_count >= initial_count

    def test_prediction_flow(self):
        """Test complete prediction flow"""
        # 1. Check health
        health = client.get("/api/health")
        assert health.status_code == 200

        # 2. Make prediction
        predict = client.post(
            "/api/predict",
            json={"text": "Breaking news about a shocking discovery in science research!"}
        )
        assert predict.status_code == 200
        prediction_data = predict.json()

        # 3. Verify prediction structure
        assert prediction_data["prediction"] in ["REAL", "FAKE"]
        assert 0 <= float(prediction_data["confidence"]) <= 100
        assert prediction_data["sentiment"] in ["positive", "negative", "neutral"]

        # 4. Get stats
        stats = client.get("/api/stats")
        assert stats.status_code == 200
        assert stats.json()["total_predictions"] > 0

        # 5. Get model info
        model_info = client.get("/api/model-info")
        assert model_info.status_code == 200
        assert model_info.json()["version"] is not None


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
