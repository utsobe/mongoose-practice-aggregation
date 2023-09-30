import { Schema, model } from "mongoose";
import { ICutomer } from "./customer.interface";

const customerSchema = new Schema<ICutomer>({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
});

const Customer = model<ICutomer>('Customer', customerSchema);

export default Customer;