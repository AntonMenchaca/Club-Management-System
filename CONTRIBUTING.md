# Contributing Guide

## Development Setup

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher
- Git

### Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/AntonMenchaca/Club-Management-System.git
cd Club-Management-System
```

2. Install dependencies:
```bash
npm install
```

This installs dependencies for both client and server workspaces.

## Development Workflow

### Running the Development Servers

Start both frontend and backend:
```bash
npm run dev
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:3001

Or run them separately:
```bash
npm run dev:client  # Frontend only
npm run dev:server  # Backend only
```

### Project Structure

```
Club-Management-System/
├── client/                    # React frontend
│   ├── src/
│   │   ├── App.tsx           # Main React component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Tailwind CSS imports
│   ├── public/               # Static assets
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── tsconfig.json         # TypeScript config
│   └── vite.config.ts        # Vite config
├── server/                    # Express backend
│   ├── src/
│   │   └── index.ts          # Express server
│   └── tsconfig.json         # TypeScript config
└── package.json              # Root package (workspaces)
```

## Making Changes

### Frontend Development

The frontend uses:
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling

#### Adding New Components

1. Create a new file in `client/src/components/`
2. Use TypeScript and functional components
3. Style with Tailwind CSS utility classes

Example:
```tsx
// client/src/components/Button.tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
```

#### Styling with Tailwind

- Use utility classes directly in JSX
- Refer to [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Custom configuration can be added to `client/tailwind.config.js`

### Backend Development

The backend uses:
- **Express** with TypeScript
- **ES2022 modules**
- **tsx** for development (hot reload)

#### Adding New API Routes

Add routes in `server/src/index.ts` or create separate route files:

```typescript
// server/src/index.ts
app.get('/api/example', (req: Request, res: Response) => {
  res.json({ message: 'Example endpoint' });
});
```

For larger applications, organize routes:

```typescript
// server/src/routes/clubs.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ clubs: [] });
});

export default router;

// server/src/index.ts
import clubsRouter from './routes/clubs.js';
app.use('/api/clubs', clubsRouter);
```

## Testing Your Changes

### Build the Project

```bash
npm run build
```

This builds both client and server.

### Run Production Build Locally

```bash
npm start
```

This starts the production server (backend only). Serve the frontend build with a static server or through the backend.

## Code Style

### TypeScript

- Use strict TypeScript (`strict: true` in tsconfig.json)
- Define types/interfaces for all data structures
- Avoid `any` type where possible

### React

- Use functional components with hooks
- Use TypeScript interfaces for props
- Keep components small and focused

### Tailwind CSS

- Use utility classes instead of custom CSS
- Follow mobile-first responsive design
- Use consistent color scheme (indigo theme)

## Commit Messages

Follow conventional commit format:

```
<type>: <description>

[optional body]
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add user authentication
fix: resolve CORS issue in API
docs: update README with deployment steps
```

## Pull Requests

1. Create a new branch for your feature/fix
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push to your fork
6. Open a pull request with description of changes

## Questions?

If you have questions or need help, please open an issue on GitHub.
