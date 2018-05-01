const express = require('express');
const public = new express.Router();

let { postTokens, addUser } = require('./authorization');
let { getSets } = require('./card-data');

public.get('/sets', getSets);
public.post('/signin', postTokens);
public.post('/createaccount', addUser);

module.exports = public;