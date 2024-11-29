import cors from 'cors';
import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import projectRouter from "./routes/projects.routes";
import dbConnection from "./db/db";
config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.use("/api/projects", projectRouter);

//Connect Dataase
dbConnection();

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to webGhoul Server');
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
