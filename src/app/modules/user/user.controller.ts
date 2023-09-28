import { NextFunction, Request, Response } from "express"
import { deleteUsersFromDBbyEmail, getUsersFromDB, getUsersFromDBbyCity, getUsersFromDBbyColor, getUsersFromDBbyEmail, getUsersFromDBbyFood, updateUsersFromDBbyEmail, usersAvgAgeFromDBbyFood, usersMovieAvgAgeGroupFromDB } from "./user.service";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDB();
    console.log(users);
    res.status(200).json({
        status: 'success',
        data: users,
    });
};

export const getUserByCity = async (req: Request, res: Response, next: NextFunction) => {
    const findCity = req.query.name;
    const userByCity = await getUsersFromDBbyCity(findCity as string);
    console.log(userByCity);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get user by city',
        data: userByCity,
    });
};

export const getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.params;
    const userByEmail = await getUsersFromDBbyEmail(email);
    console.log(userByEmail);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get favourite movie',
        data: userByEmail,
    });
};

export const getUserByFood = async (req: Request, res: Response, next: NextFunction) => {
    const findFood = req.query.name;
    const userByFood = await getUsersFromDBbyFood(findFood as string);
    console.log(userByFood);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get user by favourite food',
        data: userByFood,
    });
};

export const getUserByColor = async (req: Request, res: Response, next: NextFunction) => {
    const findColor = req.query.name;
    const userByColor = await getUsersFromDBbyColor(findColor as string);
    console.log(userByColor);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get users by color',
        data: userByColor,
    });
};

export const updateUserByEmail = async (req: Request, res: Response, next: NextFunction) => {

    const { userEmail, userZipcode } = req.body;
    const updateUserZipcode = await updateUsersFromDBbyEmail({ email: userEmail, zipcode: userZipcode });
    res.status(200).json({
        status: 'success',
        msg: 'Successfully zipcode updated',
        data: updateUserZipcode,
    });
};

export const deleteUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const userEmail = req.query.email;
    const deleteRes = await deleteUsersFromDBbyEmail(userEmail as string);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully delete user',
        data: deleteRes,
    });
};

export const getUserAvgAgeByMovie = async (req: Request, res: Response, next: NextFunction) => {
    const usersGroup = await usersMovieAvgAgeGroupFromDB()
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get users group movie age',
        data: usersGroup,
    });
};

export const getUserAvgAgeByFood = async (req: Request, res: Response, next: NextFunction) => {
    const food = req.query.food;
    const usersAvgAgeRes = await usersAvgAgeFromDBbyFood(food as string);
    res.status(200).json({
        status: 'success',
        msg: 'Successfully get users food with avg age',
        data: usersAvgAgeRes,
    });
};