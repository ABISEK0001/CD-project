@echo off
title FakeGuard Frontend - Development Server
color 0a
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║          FakeGuard - Starting Frontend Application             ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo Installing dependencies (first time only)...
echo.

cd /d "%~dp0frontend"

if not exist node_modules (
    echo Installing npm packages...
    call npm install
    if errorlevel 1 (
        echo.
        echo Error: Failed to install npm packages
        pause
        exit /b 1
    )
)

echo.
echo ✓ Dependencies ready
echo.
echo Starting development server...
echo.
echo The website will open automatically at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

timeout /t 2 /nobreak

call npm start
