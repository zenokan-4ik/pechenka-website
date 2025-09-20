@echo off
cd myapp
echo Running npm build script...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed with error level %errorlevel%
    pause
    exit /b %errorlevel%
)
title Serving
echo Build successful! Starting server...
call npx serve -s build

pause