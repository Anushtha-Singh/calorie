import express from 'express'

const app = express();

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

app.get('/', (req, res) => {
    res.send('Calorie API is running');
});