import { NextFunction, Request, Response } from "express";
import { getCustomersFromDB } from "./customer.service";

export const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customers = await getCustomersFromDB();
    res.status(200).json({
        status: 'success',
        data: customers,
    });
}