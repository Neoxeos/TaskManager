import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import taskRoutes from './router/routes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Database connected");
  console.log(`Server is running on port ${PORT}`);
});
