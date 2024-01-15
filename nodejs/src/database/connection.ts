import {connect} from 'mongoose';
import 'dotenv/config';

const {MONGO_URL, MONGO_USER, MONGO_PASSWORD} = process.env;


export async function connection(){
    await connect( MONGO_URL, {user: MONGO_USER, pass: MONGO_PASSWORD})
    console.log('Database connection established');
}