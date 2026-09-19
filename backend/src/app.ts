import express from 'express';
import healthRoutes from './routes/health-routes'
import { errorHandler } from './middleware/error-middleware';
import userRouter from './routes/user-routes';

const app = express();

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/users", userRouter); //To create User


app.use(errorHandler);

export default app;