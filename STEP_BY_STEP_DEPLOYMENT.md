# Complete Deployment Guide

## Step 1: Setup MongoDB Atlas (FREE)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free account
3. Create cluster (choose FREE tier)
4. Create database user
5. Get connection string
6. Replace the hardcoded connection in your code with environment variable

## Step 2: Setup Render (FREE)
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repo
5. Configure:
   - **Name**: blog-backend
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
6. Add Environment Variable:
   - **Key**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string

## Step 3: Setup Frontend on Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import from Git"
4. Select your repo
5. Configure:
   - **Build command**: `cd frontend && npm run build`
   - **Publish directory**: `frontend/build`

## Step 4: GitHub Actions Setup
1. Go to your GitHub repo → Settings → Secrets
2. Add these secrets:
   - `NETLIFY_AUTH_TOKEN` (from Netlify dashboard)
   - `NETLIFY_SITE_ID` (from Netlify site settings)
   - `RENDER_API_KEY` (from Render dashboard)
   - `RENDER_SERVICE_ID` (from Render service settings)

## Step 5: Test Deployment
1. Push code to GitHub
2. GitHub Actions will automatically:
   - Run tests
   - Deploy frontend to Netlify
   - Deploy backend to Render

## Your URLs:
- **Backend**: `https://your-service-name.onrender.com`
- **Frontend**: `https://your-site-name.netlify.app`

## Update Frontend API URL
Update your frontend to use the Render backend URL instead of localhost.