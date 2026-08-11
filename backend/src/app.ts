import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('calorie API isgdgh running');
});


export default app;