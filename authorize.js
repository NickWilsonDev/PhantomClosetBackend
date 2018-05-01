require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const express = require('express');
const authorize = new express.Router();

import { userByEmail } from './queries';

const signature = process.env.SIGNATURE;

let createToken = user =>
  jwt.sign(
    { userId: user.ID },
    signature,
    { expiresIn: '7d' }
  );

let postTokens = async (req, res) => {
  let { email, password } = req.body;
  let user = await userByEmail(email);

  let isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    let token = createToken(user);
    res.send(token);
  } else {
    res.send('Invalid username and/or password.');
  }
};

let checkToken = async (req, res, next) => {
  let { authorization: token } = req.headers;
  let payload;
  try {
    payload = jwt.verify(token, signature);
  } catch(err) {
    // catch the error
  }

  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.send('YOU SHALL NOT PASS');
  }
};

authorize.post('/sign-in', postTokens);

authorize.post('/create', (req, resp) => {

})

export default authorize;