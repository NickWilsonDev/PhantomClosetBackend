const express = require('express');
const public = new express.Router();

let { postTokens, addUser } = require('./authorization');
let { getSets, getCardByName } = require('./card-data');

public.get('/sets', getSets);
public.get('/cards/:name', getCardByName);
public.post('/signin', postTokens);
public.post('/createaccount', addUser);

module.exports = public;