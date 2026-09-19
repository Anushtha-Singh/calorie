import User from '../models/user-model';

export const createUser = async (userData: {
    name: string;
    email: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    height: number;
    weight: number;
    activityLevel: string;
    goal: string;
}) => {
    const user = new User(userData);
    await user.save();
    return user;
}