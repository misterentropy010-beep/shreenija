#!/bin/bash

# Shreenija Transportation System - Development Setup Script
# This script sets up the complete development environment

echo "🚀 Setting up Shreenija Transportation System..."

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

if ! command_exists python3; then
    echo "❌ Python 3 is not installed. Please install Python 3.11+ first."
    exit 1
fi

if ! command_exists docker; then
    echo "⚠️ Docker is not installed. Some features may not work."
fi

echo "✅ Prerequisites check complete"

# Setup backend
echo "🔧 Setting up Django backend..."
cd backend

# Create virtual environment
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "📁 Virtual environment created"
fi

# Activate virtual environment
source venv/bin/activate || venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
echo "📦 Python dependencies installed"

# Copy environment file
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "📄 Environment file created (.env)"
    echo "⚠️ Please update .env file with your configuration"
fi

# Run migrations
python manage.py migrate
echo "🗄️ Database migrations applied"

# Create superuser (optional)
echo "👤 Do you want to create a superuser? (y/n)"
read -r create_superuser
if [ "$create_superuser" = "y" ]; then
    python manage.py createsuperuser
fi

cd ..

# Setup web frontend
echo "🌐 Setting up React web frontend..."
cd web
npm install
echo "📦 Web dependencies installed"
cd ..

# Setup mobile app
echo "📱 Setting up React Native mobile app..."
cd mobile
npm install
echo "📦 Mobile dependencies installed"
cd ..

# Setup Docker (if available)
if command_exists docker; then
    echo "🐳 Setting up Docker environment..."
    if command_exists docker-compose; then
        echo "✅ Docker Compose is available"
        echo "🔧 You can start the full stack with: docker-compose up"
    else
        echo "⚠️ Docker Compose not found. Please install it for full Docker support."
    fi
fi

# Create development script
echo "📝 Creating development scripts..."

cat > start-dev.sh << 'EOF'
#!/bin/bash
echo "🚀 Starting Shreenija Development Environment..."

# Start backend
echo "🔧 Starting Django backend..."
cd backend
source venv/bin/activate 2>/dev/null || venv\Scripts\activate
python manage.py runserver 8000 &
BACKEND_PID=$!
cd ..

# Start web frontend
echo "🌐 Starting React web frontend..."
cd web
npm run dev &
WEB_PID=$!
cd ..

echo "✅ Development servers started!"
echo "📱 Web: http://localhost:3000"
echo "🔧 API: http://localhost:8000"
echo "🎛️ Admin: http://localhost:8000/admin"

echo "Press Ctrl+C to stop all servers..."
wait $BACKEND_PID $WEB_PID
EOF

chmod +x start-dev.sh

# Create mobile development script
cat > start-mobile.sh << 'EOF'
#!/bin/bash
echo "📱 Starting React Native development..."
cd mobile
npx expo start
EOF

chmod +x start-mobile.sh

echo "
🎉 Setup Complete! 

📋 What's been set up:
✅ Django backend with REST API
✅ React web application with TypeScript
✅ React Native mobile app with Expo
✅ PostgreSQL database (configured for SQLite in development)
✅ AI assistant with OpenAI integration
✅ Docker configuration
✅ CI/CD pipeline with GitHub Actions

🚀 Quick Start:
1. Update backend/.env with your configuration
2. Run: ./start-dev.sh (for web + backend)
3. Run: ./start-mobile.sh (for mobile app)
4. Run: docker-compose up (for full Docker environment)

📖 Access Points:
- Web App: http://localhost:3000
- API: http://localhost:8000/api
- Admin Panel: http://localhost:8000/admin

📱 Features Implemented:
- Multi-role authentication (Admin, TL, Manager, Driver, User, Corporate)
- Booking system (Cab & Hotel)
- Trip management and assignments
- KYC document management
- AI-powered scheduling and support
- Payslip generation system
- Real-time dashboards

⚠️ Next Steps:
1. Configure Google OAuth credentials
2. Set up OpenAI API key for AI features
3. Configure email settings
4. Set up production database (PostgreSQL)
5. Deploy to production environment

📚 Documentation: See README.md for detailed setup instructions
"