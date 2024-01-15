import {connect} from 'mongoose';
import 'dotenv/config';

export async function connection(){
    await connect( process.env["MONGO_URL "], {user: process.env["MONGO_USER "], pass: process.env["MONGO_PASSWORD "] })
    console.log('Database connection established');
}