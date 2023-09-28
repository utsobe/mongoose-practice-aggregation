export interface IUser {
    name: string;
    email: string;
    age: number;
    address: {
        street: string;
        city: string;
        state: string;
        zipcode: string;
    };
    favorites: {
        color: string;
        food: string;
        movie: string;
    };
    friends: [
        {
            name: string;
            email: string;
        }
    ];
}