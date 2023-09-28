import express from "express";
import { deleteUserByEmail, getUserAvgAgeByMovie, getUserByCity, getUserByColor, getUserByEmail, getUserByFood, getUsers, updateUserByEmail } from "./user.controller";

const router = express.Router();

router.get('/', getUsers);
router.get('/food', getUserByFood);
router.get('/city', getUserByCity);
router.get('/color', getUserByColor);
router.get('/vieweravgage', getUserAvgAgeByMovie);
router.delete('/deletebyemail', deleteUserByEmail);
router.get('/:email', getUserByEmail);
router.patch('/updatebyemail', updateUserByEmail);




export default router;