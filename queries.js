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
    `);
let getSetsDb = () => 
    db.query(`
        SELECT DISTINCT setname FROM all_cards;
    `);
let getCardByNameDb = (cardName) =>
    db.query(`
        SELECT * FROM all_cards
        WHERE name ILIKE '%${cardName}%';
    `);
module.exports = {
    userByUsername,
    addUserToDb,
    getSetsDb,
    getCardByNameDb
}