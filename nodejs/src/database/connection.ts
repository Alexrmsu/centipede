import {connect} from 'mongoose';

export async function connection(){
    await connect('mongodb://localhost:27017/dummy', {user: 'dummy', pass: 'test'})
    console.log('Database connection established');
}