import dotenv from 'dotenv';

dotenv.config();       

export const PORT = process.env.PORT || 3000;

if(!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
}

export const MONGODB_URI = process.env.MONGODB_URI;
