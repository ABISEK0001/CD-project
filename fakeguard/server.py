#!/usr/bin/env python3
"""
Simple HTTP Server for FakeGuard Website
Serves index.html on http://localhost:8000
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Get the directory where this script is located
SCRIPT_DIR = Path(__file__).parent.absolute()
os.chdir(SCRIPT_DIR)

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add cache control headers to prevent caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

try:
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("🚀 FakeGuard Server Started!")
        print("=" * 60)
        print(f"\n✅ Server running at: http://localhost:{PORT}")
        print(f"📁 Serving files from: {SCRIPT_DIR}")
        print(f"\n🌐 Open your browser and go to:")
        print(f"   👉 http://localhost:{PORT}\n")
        print("=" * 60)
        print("Press Ctrl+C to stop the server")
        print("=" * 60 + "\n")
        
        httpd.serve_forever()
        
except KeyboardInterrupt:
    print("\n\n❌ Server stopped by user")
    sys.exit(0)
except OSError as e:
    print(f"\n❌ Error: {e}")
    print(f"\nPort {PORT} might be in use. Try running with a different port:")
    print(f"   python server.py 8080")
    sys.exit(1)
