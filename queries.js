require('dotenv').config()
const pg = require('pg-promise')();
const db = pg(process.env.DB_PATH);

let userByUsername = (username) =>
    db.query(`
        SELECT * FROM users
        WHERE username = '${username}';
    `);
let addUserToDb = (username, password) =>
    db.query(`
        INSERT INTO users (username, password, role)
        VALUES ('${username}', '${password}', 'customer');
    `)

module.exports = {
    userByUsername,
    addUserToDb
}