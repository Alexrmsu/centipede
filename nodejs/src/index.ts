import app from './app';
import {connection} from "./database/connection";


async function main() : Promise<void> {
    await connection();
    await app.listen(3000);
}

main().then(()  => console.log('Server started')).catch(err => console.log(err));