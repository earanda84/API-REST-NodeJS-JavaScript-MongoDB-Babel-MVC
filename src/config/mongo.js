import "dotenv/config";

import { connect } from "mongoose";

const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
    try {

        console.log("CONNECTING TO DATABASE...")
        await connect(DB_URI)

        setTimeout(() => {
            console.log("DB CONNECTED!")
        }, 2000);

    } catch (error) {
        console.log(error)
    }
}

export default dbConnect;