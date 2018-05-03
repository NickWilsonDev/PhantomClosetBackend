const express = require('express');
const private = new express.Router();

let { addToQueue } = require('./user-data');

private.post('/addtoqueue/', addToQueue);

module.exports = private;