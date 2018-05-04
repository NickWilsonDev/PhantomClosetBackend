
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
let getCardsFromStandardDb = () =>
    db.query(`
    SELECT * FROM all_cards
    WHERE setName in ('Kaladesh', 'Aether Revolt', 
    'Amonket', 'Hour of Devastation', 'Ixalan', 
    'Rivals of Ixalan', 'Dominaria' );    
    `);
let getCardsByNameDb = (cardName) =>
    db.query(`
        SELECT * FROM all_cards
        WHERE name ILIKE '${cardName}';
    `);
let getCardsBySetNameDb = (setName) =>
    db.query(`
        SELECT * FROM all_cards
        WHERE setName ILIKE '%${setName}%';
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

let getFromQueueDb = (userId) =>
    db.query(`
        SELECT * FROM all_cards WHERE cardid IN 
            (SELECT cardid FROM cards_in_queue WHERE userid = '${userId}');
    `);

let getAtHomeDb = (userId) =>
    db.query(`
        SELECT * FROM all_cards WHERE cardid IN 
            (SELECT cardid FROM cards_at_home WHERE userid = '${userId}');
    `);

module.exports = {
    userByUsername,
    addUserToDb,
    getCardsFromStandardDb,
    getSetsDb,
    getCardsByNameDb,
    getCardsByNameAutocompleteDb,
    addToQueueDb,
    getFromQueueDb,
    getCardsBySetNameDb,
    getAtHomeDb
}
