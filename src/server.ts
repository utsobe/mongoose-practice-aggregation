import mongoose from 'mongoose';
import app from './app';

const port = 5000;


// DATABASE CONNECTION
async function mongoosePractice() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-aggregation-practice');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        });
    } catch (e) {
        console.log(`Failed to connect database`, e);
    }
}

mongoosePractice();



