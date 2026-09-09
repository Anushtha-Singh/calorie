import mongoose from 'mongoose';
import { MONGODB_URI } from '../config/env';

export const connectDatabase = async () => {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
};