import mongoose, { trusted } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    height: {
        type: Number,
        required: true,
        min: 1
    },
    weight: {
        type: Number,
        required: true,
        min: 1
    },  
    activityLevel: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

export default User;