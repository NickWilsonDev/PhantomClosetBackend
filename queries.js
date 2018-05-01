require('dotenv').config()
const pg = require('pg-promise')();
const db = pg(process.env.DB_PATH);

export let userByUsername = (username) =>
    db.query(`
        SELECT * FROM users
        WHERE users.username = ${username};
    `);