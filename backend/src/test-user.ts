import mongoose from "mongoose";
import { connectDatabase } from './database/conntection';
import User from './models/user-model';

const testUser = async () => {
  await connectDatabase();

  console.log("Database:", mongoose.connection.name);
  console.log("Collection:", User.collection.name);

  const user = await User.create({
    name: "Test User",
    email: "test@example.com",
    age: 21,
    gender: "female",
    height: 160,
    weight: 43,
    activityLevel: "moderate",
    goal: "gain",
  });

  console.log(user);

  await mongoose.disconnect();
};

testUser();