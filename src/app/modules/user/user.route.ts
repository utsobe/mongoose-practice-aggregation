import express from "express";
import { getUserByCity, getUserByColor, getUserByEmail, getUserByFood, getUsers } from "./user.controller";

const router = express.Router();

router.get('/', getUsers);
router.get('/food', getUserByFood);
router.get('/city', getUserByCity);
router.get('/color', getUserByColor);
router.get('/:email', getUserByEmail);


export default router;