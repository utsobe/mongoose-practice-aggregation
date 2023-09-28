import { IUser } from "./user.interface";
import User from "./user.model"

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.aggregate([
        {
            $match: { 'favorites.movie': 'The Shawshank Redemption' },
        },
        {

            $count: 'The Shawshank Redemption'
        }
    ]);
    return users[0];
}

export const getUsersFromDBbyCity = async (payload: string) => {
    const users = await User.aggregate([
        {
            $match: { 'address.city': payload },
        }
    ]);
    return users;
}

export const getUsersFromDBbyEmail = async (payload: string) => {
    const users = await User.aggregate([
        {
            $match: { email: payload },
        },
        {
            $project: { "favorites.movie": 1 },
        }
    ]);
    return users;
}

export const getUsersFromDBbyFood = async (payload: string) => {
    const users = await User.aggregate([
        {
            $match: { 'favorites.food': payload },
        },
        {
            $sort: { age: 1 },
        }
    ]);
    return users;
}

export const getUsersFromDBbyColor = async (payload: string) => {
    const users = await User.aggregate([
        {
            $match: { 'favorites.color': payload, age: { $gt: 30 } },
        },
    ]);
    return users;
}