import express from "express";
import { getCustomer } from "./customer.controller";

const router = express.Router();

router.get('/', getCustomer);

export default router;
