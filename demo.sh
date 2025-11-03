#!/bin/bash

# Shreenija Transportation System - Demo Script
# This script sets up and runs the complete MVP demo

echo "🎬 Shreenija Transportation System - Live Demo"
echo "=============================================="

# Check if backend is running
check_backend() {
    echo "🔧 Checking backend status..."
    if curl -s http://localhost:8000/admin/ > /dev/null; then
        echo "✅ Backend is running on http://localhost:8000"
        return 0
    else
        echo "❌ Backend is not running. Starting backend..."
        return 1
    fi
}

# Check if web frontend is running
check_web() {
    echo "🌐 Checking web frontend status..."
    if curl -s http://localhost:3000 > /dev/null; then
        echo "✅ Web frontend is running on http://localhost:3000"
        return 0
    else
        echo "❌ Web frontend is not running. Starting web..."
        return 1
    fi
}

# Start backend if not running
start_backend() {
    echo "🔧 Starting Django backend..."
    cd backend
    
    # Activate virtual environment
    if [ -f "venv/bin/activate" ]; then
        source venv/bin/activate
    elif [ -f "venv/Scripts/activate" ]; then
        source venv/Scripts/activate
    fi
    
    # Apply migrations
    python manage.py migrate
    
    # Create sample data
    python manage.py create_sample_data
    
    # Start server in background
    python manage.py runserver 8000 &
    BACKEND_PID=$!
    echo "🔧 Backend started with PID: $BACKEND_PID"
    
    cd ..
    sleep 3
}

# Start web frontend if not running
start_web() {
    echo "🌐 Starting React web frontend..."
    cd web
    npm run dev &
    WEB_PID=$!
    echo "🌐 Web frontend started with PID: $WEB_PID"
    cd ..
    sleep 3
}

# Setup demo environment
setup_demo() {
    echo "📋 Setting up demo environment..."
    
    if ! check_backend; then
        start_backend
    fi
    
    if ! check_web; then
        start_web
    fi
    
    echo "⏳ Waiting for services to be ready..."
    sleep 5
}

# Display demo information
show_demo_info() {
    echo "
🎯 DEMO READY! 

🌐 Access Points:
- Web Application: http://localhost:3000
- API Documentation: http://localhost:8000/admin
- Admin Panel: http://localhost:8000/admin

👥 Demo Accounts:
1. Admin Dashboard: admin@shreenija.com / password123
   - Full system control, analytics, team management
   
2. Team Leader: tl@shreenija.com / password123  
   - Task allocation, trip management, payslips
   
3. Manager: manager@shreenija.com / password123
   - Team oversight, reporting to admin
   
4. Driver: driver1@shreenija.com / password123
   - Trip details, earnings, navigation
   
5. General User: user@example.com / password123
   - Book cabs and hotels
   
6. Corporate Client: corporate@democorp.com / password123
   - Corporate service tracking

🎬 Demo Flow:
1. Start with Login page (http://localhost:3000)
2. Try 'Company Login' to see role-based access
3. Test user booking flow with general user account
4. Check admin analytics and team management
5. Explore driver dashboard with trip assignments
6. Test AI assistant features in admin panel

🤖 AI Features Available:
- Automated scheduling assistant
- Route optimization suggestions  
- Customer support chatbot
- Analytics and insights

📱 Mobile App:
- Run: ./start-mobile.sh
- Scan QR code with Expo Go app

🐳 Docker Alternative:
- Run: docker-compose up
- Access same URLs as above

Press Ctrl+C to stop demo servers...
"
}

# Cleanup function
cleanup() {
    echo "
🛑 Stopping demo servers..."
    if [ ! -z "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null
        echo "🔧 Backend stopped"
    fi
    if [ ! -z "$WEB_PID" ]; then
        kill $WEB_PID 2>/dev/null  
        echo "🌐 Web frontend stopped"
    fi
    echo "👋 Demo ended. Thank you!"
    exit 0
}

# Set trap for cleanup
trap cleanup SIGINT SIGTERM

# Main demo execution
main() {
    setup_demo
    show_demo_info
    
    # Keep script running
    while true; do
        sleep 1
    done
}

# Run main function
main