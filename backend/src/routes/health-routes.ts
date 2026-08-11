import express from 'express';

const healthRouter = express.Router();

healthRouter.get("/health", (req, res) => {
    res.send("API is running");
});

export default healthRouter;