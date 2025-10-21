# Deployment Guide

## Deploying to Vercel

This project is configured for seamless deployment on Vercel.

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Follow the prompts to configure your deployment. Vercel will automatically detect the configuration from `vercel.json`.

### Option 2: Deploy from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

### Configuration

The `vercel.json` file is already configured with:
- Frontend build configuration pointing to `client/dist`
- Backend API routes configured for `/api/*` endpoints
- Proper routing to serve the React app for all other routes

### Environment Variables

If you need to add environment variables (e.g., database connection strings):

1. In the Vercel dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables (they will be available to both frontend and backend)

For local development, create a `.env` file in the respective directories:
- `client/.env` for frontend variables
- `server/.env` for backend variables

### API Routes

The backend Express server will be accessible at:
- Production: `https://your-domain.vercel.app/api/*`
- Local development: `http://localhost:3001/api/*`

### Frontend

The React frontend will be accessible at:
- Production: `https://your-domain.vercel.app`
- Local development: `http://localhost:5173`

### Build Commands

Vercel will automatically run:
- Frontend: `npm run build` in the `client` workspace
- Backend: Serverless functions from `server/src/index.ts`

### Troubleshooting

If deployment fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json` (not devDependencies for runtime code)
3. Verify that `vercel.json` paths are correct
4. Make sure TypeScript compiles without errors locally first

For more information, see the [Vercel documentation](https://vercel.com/docs).
