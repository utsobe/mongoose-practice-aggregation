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

export const updateUsersFromDBbyEmail = async (payload: { email: string, zipcode: string }) => {
    const updateRes = await User.updateOne(
        { email: payload.email },
        {
            $set: { 'address.zipcode': payload.zipcode }
        }
    );
    console.log(updateRes);
    return updateRes;
}

export const deleteUsersFromDBbyEmail = async (payload: string) => {
    const deleteRes = await User.deleteOne(
        { email: payload },
    );
    console.log(deleteRes);
    return deleteRes;
}

export const usersMovieAvgAgeGroupFromDB = async () => {
    const userRes = await User.aggregate([
        {
            $group: {
                _id: '$favorites.movie',
                age: { $avg: '$age' }
            }
        }
    ]);
    console.log(userRes);
    return userRes;
}

export const usersAvgAgeFromDBbyFood = async (payload: string) => {
    const userRes = await User.aggregate([
        {
            $match: { 'favorites.food': payload }
        },
        {
            $group: {
                _id: '$favorites.food',
                avgAge: { $avg: '$age' }
            }
        },
        {
            $project: {
                food: '$_id',
                avgAge: 1,
                _id: 0
            }
        }
    ]);
    console.log(userRes);
    return userRes;
}