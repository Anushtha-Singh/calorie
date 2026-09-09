import app from './app';
import { PORT } from './config/env';
import { connectDatabase } from './database/conntection'

const startServer = async () => {
    await connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

};

startServer();
