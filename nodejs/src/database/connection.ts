import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'scrapers'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL database');
});


module.exports = connection;