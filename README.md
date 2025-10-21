# Club Management System

CS5200 Northeastern University Database Management Project

A full-stack application built with React (TypeScript), Express (TypeScript), and Tailwind CSS, designed for deployment on Vercel.

## Tech Stack

- **Frontend**: React 18 with TypeScript, Vite, Tailwind CSS
- **Backend**: Express with TypeScript
- **Deployment**: Vercel

## Project Structure

```
Club-Management-System/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Tailwind CSS imports
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── server/                 # Express backend
│   ├── src/
│   │   └── index.ts       # Express server
│   ├── package.json
│   └── tsconfig.json
├── package.json           # Root package.json (workspaces)
└── vercel.json            # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AntonMenchaca/Club-Management-System.git
cd Club-Management-System
```

2. Install dependencies:
```bash
npm install
```

This will install dependencies for both the client and server workspaces.

### Development

Run both frontend and backend in development mode:
```bash
npm run dev
```

Or run them separately:
```bash
# Frontend only (http://localhost:5173)
npm run dev:client

# Backend only (http://localhost:3001)
npm run dev:server
```

### Building

Build both frontend and backend:
```bash
npm run build
```

Or build them separately:
```bash
# Frontend only
npm run build:client

# Backend only
npm run build:server
```

### Production

Start the production server:
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/clubs` - Get list of clubs

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

To deploy:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Features

- ✅ React with TypeScript
- ✅ Express backend with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Vite for fast development and building
- ✅ Vercel deployment configuration
- ✅ Monorepo structure with npm workspaces

## License

See LICENSE file for details.
