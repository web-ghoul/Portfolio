import cors from 'cors';
import { config } from 'dotenv';
import express, { Request, Response } from 'express';
config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'https://your-frontend-domain.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to webGhoul Server');
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
