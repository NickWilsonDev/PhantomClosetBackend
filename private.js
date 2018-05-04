const express = require('express');
const private = new express.Router();

let { addToQueue, getFromQueue } = require('./user-data');

private.post('/addtoqueue/', addToQueue);

private.get('/getqueue/', getFromQueue);

module.exports = private;
