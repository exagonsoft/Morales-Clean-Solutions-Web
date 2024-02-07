import mongoose from "mongoose";
import { dbConnectionData } from "./environment";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('🚛MongoDB is already connected🚛');
        return;
    }

    try {
        await mongoose.connect(dbConnectionData.dbUri, {
            dbName: dbConnectionData.dbName,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
    } catch (error) {
        console.log("⛔", error);
    }
}