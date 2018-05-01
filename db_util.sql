-- db_util.sql
/*
psql -d postgres -f ./db_util.sql ====> creates db and tables
psql -d pc ==========> opens up db in terminal
psql -f [file.sql] -U ubuntu -d [dbname]
*/

DROP DATABASE IF EXISTS pc;
CREATE DATABASE pc;

-- single line comment
/* multi line comment */

\c pc;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR (100) UNIQUE,
    password VARCHAR (100),
    role VARCHAR (50)
);


CREATE TABLE cards_at_home (
    userid integer NOT NULL,
    PRIMARY KEY (userid),
    cardid integer,
    CONSTRAINT cards_at_home_user_id_fkey FOREIGN KEY(userid)
        REFERENCES users (ID) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE cards_in_queue (
    userid integer NOT NULL,
    PRIMARY KEY (userid),
    cardid integer,
    position integer,
    CONSTRAINT cards_at_home_user_id_fkey FOREIGN KEY(userid)
        REFERENCES users (ID) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);


CREATE TABLE all_cards (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (100) UNIQUE NOT NULL,
    manaCost VARCHAR (100),
    colors text[],
    colorIdentity text[]
);

/* insert statements */
/* from json */
INSERT INTO users (username, password, role) VALUES
    ('nick', 'nick', 'admin'),
    ('rachel', 'rachel', 'admin'),
    ('ashley', 'ashley', 'admin');

