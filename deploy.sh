#!/bin/bash
# Deployment script for cPanel

echo "🚀 Preparing for cPanel deployment..."

# Build the application
echo "📦 Building application..."
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
mkdir -p deploy

# Copy necessary files
cp -r dist deploy/
cp package.production.json deploy/package.json
cp .htaccess deploy/
cp -r public deploy/ 2>/dev/null || true

# Copy environment variables (without sensitive data)
if [ -f .env.example ]; then
    cp .env.example deploy/
fi

# Create deployment archive
echo "📦 Creating deployment archive..."
tar -czf san-marina-deployment.tar.gz deploy/

echo "✅ Deployment package ready: san-marina-deployment.tar.gz"
echo ""
echo "📋 cPanel Deployment Steps:"
echo "1. Upload san-marina-deployment.tar.gz to your cPanel File Manager"
echo "2. Extract the archive in your public_html directory"
echo "3. Set up Node.js application in cPanel:"
echo "   - Go to cPanel > Software > Setup Node.js App"
echo "   - Application root: public_html/deploy"
echo "   - Application URL: yourdomain.com"
echo "   - Application startup file: dist/server.js (or check your dist folder)"
echo "   - Passenger log file: /home/username/logs/passenger.log"
echo "4. Run 'npm install' in the application directory"
echo "5. Update .htaccess PORT placeholder with your assigned port"
echo ""
echo "⚠️  Important: Update your .env file with production values"