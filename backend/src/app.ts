import express from 'express';
import healthRoutes from './routes/health-routes'
import { errorHandler } from './middleware/error-middleware';

const app = express();

app.use(express.json());

app.use("/api/health", healthRoutes);

app.use(errorHandler);

export default app;