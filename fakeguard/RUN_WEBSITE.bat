@echo off
title FakeGuard - Open in Browser
color 0a

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║          FakeGuard - Fake News Detection Platform              ║
echo ║                   Opening in Browser...                        ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Get the script directory
set "SCRIPT_DIR=%~dp0"
set "INDEX_FILE=%SCRIPT_DIR%index.html"

echo Opening: %INDEX_FILE%
echo.

REM Open the file in the default browser
start "" "%INDEX_FILE%"

echo ✓ Website opened successfully!
echo.
echo The website is now running locally with full functionality.
echo.
echo Features available:
echo  ✓ Fake news detection
echo  ✓ Confidence scoring
echo  ✓ Sentiment analysis
echo  ✓ Responsive design
echo  ✓ No installation needed
echo.
echo Thank you for using FakeGuard!
echo.
pause
