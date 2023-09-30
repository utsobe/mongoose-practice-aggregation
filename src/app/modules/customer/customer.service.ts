import Customer from "./customer.model"

export const getCustomersFromDB = async () => {
    const customers = await Customer.aggregate([
        {
            $lookup: {
                from: 'orders',
                localField: '_id',
                foreignField: 'customer_id',
                as: 'orders'
            }
        }
    ]);
    return customers;
}