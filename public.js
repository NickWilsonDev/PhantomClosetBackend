const express = require('express');
const public = new express.Router();

let { postTokens, addUser } = require('./authorization');
let { getSets, getCardsByName, getCardsByNameAutoComplete } = require('./card-data');

public.get('/sets', getSets);
public.get('/cards/:name', getCardsByName);
public.get('/autocomplete/:name', getCardsByNameAutoComplete);
public.post('/signin', postTokens);
public.post('/createaccount', addUser);

module.exports = public;