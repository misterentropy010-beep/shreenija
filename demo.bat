@echo off
REM Shreenija Transportation System - Windows Demo Script

echo 🎬 Shreenija Transportation System - Live Demo
echo ==============================================

REM Check if backend is running
echo 🔧 Checking services...

REM Start backend
echo 🔧 Starting Django backend...
cd backend
call venv\Scripts\activate.bat
python manage.py migrate
python manage.py create_sample_data
start "Backend Server" cmd /k python manage.py runserver 8000
cd ..

REM Wait for backend to start
timeout /t 3

REM Start web frontend
echo 🌐 Starting React web frontend...
cd web
start "Web Frontend" cmd /k npm run dev
cd ..

REM Wait for services to be ready
echo ⏳ Waiting for services to be ready...
timeout /t 8

echo.
echo 🎯 DEMO READY!
echo.
echo 🌐 Access Points:
echo - Web Application: http://localhost:3000
echo - API Documentation: http://localhost:8000/admin
echo - Admin Panel: http://localhost:8000/admin
echo.
echo 👥 Demo Accounts:
echo 1. Admin: admin@shreenija.com / password123
echo 2. Team Leader: tl@shreenija.com / password123
echo 3. Manager: manager@shreenija.com / password123
echo 4. Driver: driver1@shreenija.com / password123
echo 5. User: user@example.com / password123
echo 6. Corporate: corporate@democorp.com / password123
echo.
echo 🎬 Demo Flow:
echo 1. Open http://localhost:3000 in your browser
echo 2. Try different user roles to see features
echo 3. Test booking system with general user
echo 4. Explore admin analytics and management
echo 5. Check AI assistant features
echo.
echo Press any key to open the web application...
pause >nul
start http://localhost:3000

echo.
echo Demo is running! Close the command windows to stop servers.
pause