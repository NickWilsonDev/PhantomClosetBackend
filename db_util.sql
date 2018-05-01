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
    username VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    role VARCHAR (50) NOT NULL
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
    cardID SERIAL PRIMARY KEY,
    name VARCHAR (256) NOT NULL,
    manaCost VARCHAR (100),
    cmc VARCHAR(10),
    colors text,
    colorIdentity text,
    "type" text,
    types text,
    subtypes text,
    rarity VARCHAR(50),
    "set" VARCHAR(20),
    setName VARCHAR(50),
    "text" text,
    artist VARCHAR(100),
    "number" VARCHAR(20),
    "power" VARCHAR(20),
    toughness VARCHAR(20),
    layout VARCHAR(20),
    multiverseid VARCHAR(30),
    imageUrl VARCHAR(256),
    printings text,
    originalText text,
    originalType text,
    id VARCHAR(80)
);

/* insert statements */
/* from json */
\copy all_cards(name, manaCost, cmc, colors, colorIdentity, "type", types, subtypes, rarity, "set", setName, "text", artist, "number", "power", toughness, layout, multiverseid, imageUrl, printings, originalText, originalType, id) FROM './cards.csv' WITH (FORMAT csv);

INSERT INTO users (username, password, role) VALUES
    ('nick', 'nick', 'admin'),
    ('rachel', 'rachel', 'admin'),
    ('ashley', 'ashley', 'admin');

