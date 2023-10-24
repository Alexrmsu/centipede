import {connect} from 'mongoose';


async function connection(): Promise<void>{
    await connect('mongodb://localhost/dummy')
    console.log('Database is up')
}