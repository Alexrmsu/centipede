import app from './app';

async function main() : Promise<void> {
    await app.listen(3000);
    console.log('Server on port 3000');
}
main();