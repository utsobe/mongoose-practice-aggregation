import express, { Application } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';
import customerRouter from './app/modules/customer/customer.route';

const app: Application = express();

// USING CORS
app.use(cors());

// PARSE DATA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MODULE ROUTERS
app.use('/api/v1/user', userRouter);
app.use('/api/v1/customer', customerRouter);

export default app;