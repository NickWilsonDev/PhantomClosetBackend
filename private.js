const express = require('express');
const private = new express.Router();

let {   addToQueue, 
        getFromQueue,
        getAtHome 
    } = require('./user-data');

private.post('/addtoqueue', addToQueue);
private.get('/getqueue', getFromQueue);
private.get('/getathome', getAtHome);
// private.use('/administrator', checkRole, administrator);


module.exports = private;
