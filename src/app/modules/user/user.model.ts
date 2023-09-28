import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// USER SCHEMA
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    address: {
        street: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
    },
    favorites: {
        color: { type: String },
        food: { type: String },
        movie: { type: String },
    },
    friends: [
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
        }
    ],
});

// USER MODEL
const User = model<IUser>('User', userSchema);

export default User;

