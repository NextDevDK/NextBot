import mongoose from 'mongoose';
import {mongo} from "../config";

async function Connect() {
    await mongoose.connect(mongo, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log("Connected to the mongoose database....")
}


module.exports = {
    Connect
}
