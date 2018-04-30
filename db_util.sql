-- db_util.sql
/*
psql -d postgres -f ./cramit.sql ====> creates db and tables
psql -d cramit ==========> opens up db in terminal
psql -f [file.sql] -U ubuntu -d [dbname]
*/

DROP DATABASE IF EXISTS pc;
CREATE DATABASE pc;

-- single line comment
/* multi line comment */

\c pc;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR (100),
    password VARCHAR (100)
);


CREATE TABLE cards_at_home (
    userid integer NOT NULL,
    PRIMARY KEY (userid),
    cardid integer,
    CONSTRAINT cards_at_home_user_id_fkey FOREIGN KEY(userid)
        REFERENCES users (ID) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE cards_int_queue (
    userid integer NOT NULL,
    PRIMARY KEY (userid),
    cardid integer,
    position integer,
    CONSTRAINT cards_at_home_user_id_fkey FOREIGN KEY(userid)
        REFERENCES users (ID) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION
);


CREATE TABLE all_cards (
    

/* insert statements */

