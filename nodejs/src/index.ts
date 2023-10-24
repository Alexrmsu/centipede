import app from './app';

async function main() : Promise<void> {
    await app.listen(3000);
}

main().then(()  => console.log('Server started')).catch(err => console.log(err));