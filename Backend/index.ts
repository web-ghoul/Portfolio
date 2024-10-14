import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to webGhoul Server');
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
