import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Sample API endpoint
app.get('/api/clubs', (req: Request, res: Response) => {
  res.json({
    clubs: [
      { id: 1, name: 'Computer Science Club', members: 50 },
      { id: 2, name: 'Chess Club', members: 25 },
      { id: 3, name: 'Robotics Club', members: 40 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
