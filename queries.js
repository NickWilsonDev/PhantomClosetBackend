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
let getCardsByNameDb = (cardName) =>
    db.query(`
        SELECT * FROM all_cards
        WHERE name ILIKE '%${cardName}%';
    `);
let getCardsByNameAutocompleteDb = (cardName) =>
    db.query(`
        SELECT DISTINCT name FROM all_cards
        WHERE name ILIKE '${cardName}%';
    `);
let addToQueueDb = (userId, cardId, position) =>
    db.query(`
        INSERT INTO cards_in_queue (userid, cardid, position)
        VALUES ('${userId}', '${cardId}', '${position}');
    `);
module.exports = {
    userByUsername,
    addUserToDb,
    getSetsDb,
    getCardsByNameDb,
    getCardsByNameAutocompleteDb,
    addToQueueDb
}