const express = require('express');
const public = new express.Router();

let { postTokens, addUser } = require('./authorization');


public.post('/signin', postTokens);
public.post('/createaccount', addUser);

module.exports = public;