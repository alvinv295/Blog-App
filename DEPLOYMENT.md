# CI/CD Deployment Guide

## Free Services Setup

### 1. Frontend (Netlify)
1. Sign up at [netlify.com](https://netlify.com)
2. Get your Site ID and Auth Token from Netlify dashboard
3. Add these as GitHub Secrets:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`

### 2. Backend (Render - FREE)
1. Sign up at [render.com](https://render.com)
2. Create a new Web Service
3. Get your API Key and Service ID
4. Add these as GitHub Secrets:
   - `RENDER_API_KEY`
   - `RENDER_SERVICE_ID`

### 3. Database (MongoDB Atlas)
1. Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free cluster
3. Get connection string
4. Add as GitHub Secret: `MONGODB_URI`

## GitHub Secrets Setup
Go to your repo → Settings → Secrets and variables → Actions

Add these secrets:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`
- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`
- `MONGODB_URI`

## Workflow Triggers
- **CI Pipeline**: Runs on every push/PR
- **Frontend Deploy**: Runs when frontend files change
- **Backend Deploy**: Runs when backend files change

## Alternative Free Options
- **Frontend**: Vercel, GitHub Pages
- **Backend**: Render, Heroku
- **Database**: MongoDB Atlas, PlanetScale