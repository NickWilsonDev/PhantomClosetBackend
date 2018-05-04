const express = require('express');
const private = new express.Router();
const { checkRole } = require('./authorization')
const {   addToQueue, 
        getFromQueue,
        getAtHome 
    } = require('./user-data');
const administrator = require('./adminstrator')

private.post('/addtoqueue', addToQueue);
private.get('/getqueue', getFromQueue);
private.get('/getathome', getAtHome);
private.use('/administrator', checkRole, administrator);


module.exports = private;
