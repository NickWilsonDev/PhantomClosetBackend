const express = require('express');
const public = new express.Router();

let { postTokens, addUser } = require('./authorization');
let { getSets, getCardsByName, getCardsInSpecificSets, getCardsByNameAutocomplete } = require('./card-data');

public.get('/sets', getSets);
public.get('/sets/:set', getCardsInSpecificSets);
public.get('/cards/:name', getCardsByName);
public.get('/autocomplete/:name', getCardsByNameAutocomplete);
public.post('/signin', postTokens);
public.post('/createaccount', addUser);

module.exports = public;